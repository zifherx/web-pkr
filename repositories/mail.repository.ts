import { IMailRepository, MailPayload } from "@/interfaces";
import { createTransport, Transporter } from "nodemailer";

class NodemailerRepository implements IMailRepository {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async send({ html, subject, to, replyTo, text }: MailPayload): Promise<void> {
    await this.transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
        to,
        replyTo,
        subject,
        html,
        text
    })
  }
}

export const mailRepository: IMailRepository = new NodemailerRepository();