import { render } from "react-email";

import { ConfirmacionEmail } from "@/emails/Confirmacion-Email";
import { ContactoEmail } from "@/emails/ContactoEmail";

import { contactoRepository } from "@/repositories/contacto.repository";
import { mailRepository } from "@/repositories/mail.repository";

import { IContactoRepository, IMailRepository, MailPayload } from "@/interfaces";
import { ContactoInput } from "@/validation/contacto.validation";

export class ContactoService {
  constructor(
    private readonly mailRepo: IMailRepository,
    private readonly contactoRepo: IContactoRepository
  ) {}

  async enviar(data: ContactoInput, ip?: string): Promise<void> {
    const fechaEnvio = new Date().toLocaleString("es-PE", {
      timeZone: "America/Lima",
      dateStyle: "full",
      timeStyle: "short",
    });

    try {
      await this.contactoRepo.guardar(data, ip);
    } catch (dbErr) {
      console.error("[ContactoService] Error al persistir en MongoDB:", dbErr);
    }

    const [notificacionResult, confirmacionResult] = await Promise.all([
      render(<ContactoEmail propsEmail={{ ...data, fecha: fechaEnvio }} />),
      render(<ConfirmacionEmail propsEmail={{ ...data }} />),
    ]);

    const notificacion: MailPayload = {
      to: process.env.SMTP_TO!,
      replyTo: data.email,
      subject: `Nuevo contacto - ${data.nombre_completo}`,
      html: notificacionResult,
      text: `Correo de notificación a PKR`,
    };

    const confirmacion: MailPayload = {
      to: data.email,
      subject: `Recibimos tu consulta, ${data.nombre_completo}`,
      html: confirmacionResult,
      text: `Correo de confirmación a cliente`,
    };

    await this.mailRepo.send(notificacion);
    await new Promise((res) => setTimeout(res, 1500));
    await this.mailRepo.send(confirmacion);
  }
}

export const contactoService = new ContactoService(mailRepository, contactoRepository);
