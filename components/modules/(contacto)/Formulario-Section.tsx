"use client";

import { useState } from "react";
import { AtSign, Building, Loader2, MessageCircle, Phone, Rocket, User } from "lucide-react";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { enviarContacto } from "@/services/client/contacto.service";
import { ContactoInput, ContactoSchema } from "@/validation/contacto.validation";

export function FormularioSection() {
  const inView = true;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactoInput>({
    resolver: zodResolver(ContactoSchema),
    defaultValues: {
      nombre_completo: "",
      email: "",
      empresa: "",
      mensaje: "",
      servicio_interes: "",
      telefono: "",
    },
  });

  const onSubmit = async (data: ContactoInput) => {
    setIsSubmitting(true);
    try {
      await enviarContacto(data);
      toast.success(`Mensaje enviado correctamente. Te responderemos pronto`)
      form.reset();
    } catch (err:unknown) {
        const message = err instanceof Error ? err.message : "Ocurrió un error inesperado"
        toast.error(message)
    }finally{
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="md:col-span-3 space-y-8"
    >
      <div className="bg-white border border-pastel shadow-sm p-12">
        <h2 className="text-navy mb-1 font-semibold text-3xl">Envíanos un mensaje</h2>
        <p className="text-[#b0a99a] text-sm mb-8">Respondemos en menos de 24 horas hábiles.</p>

        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Nombre Completo */}
            <Controller
              name="nombre_completo"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-nombre-completo">
                    Nombre Completo
                    <span className="text-red-400">*</span>
                  </FieldLabel>

                  <InputGroup className="h-12 bg-[#f7f3ec] rounded-sm focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-gold300 focus:border-2 focus:border-[#C8A547]">
                    <InputGroupInput
                      {...field}
                      placeholder="Nombre Completo..."
                      id="contacto-nombre-completo"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                    />
                    <InputGroupAddon>
                      <User />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-email">
                    Email
                    <span className="text-red-400">*</span>
                  </FieldLabel>

                  <InputGroup className="h-12 bg-[#f7f3ec] rounded-sm focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-gold300 focus:border-2 focus:border-[#C8A547]">
                    <InputGroupInput
                      {...field}
                      placeholder="tu_correo@email.com"
                      id="contacto-email"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                    />
                    <InputGroupAddon>
                      <AtSign />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Telefono */}
            <Controller
              name="telefono"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-telefono">
                    Teléfono
                    <span className="text-red-400">*</span>
                  </FieldLabel>

                  <InputGroup className="h-12 bg-[#f7f3ec] rounded-sm focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-gold300 focus:border-2 focus:border-[#C8A547]">
                    <InputGroupInput
                      {...field}
                      placeholder="999012856"
                      id="contacto-telefono"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                    />
                    <InputGroupAddon>
                      <Phone />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Empresa */}
            <Controller
              name="empresa"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-empresa">
                    Empresa
                  </FieldLabel>

                  <InputGroup className="h-12 bg-[#f7f3ec] rounded-sm focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-gold300 focus:border-2 focus:border-[#C8A547]">
                    <InputGroupInput
                      {...field}
                      placeholder="Tu empresa ..."
                      id="contacto-empresa"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                    />
                    <InputGroupAddon>
                      <Building />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {/* Servicio de interes */}
          <Controller
            name="servicio_interes"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-servicio-interes">
                  Servicio de Interés
                  <span className="text-red-400">*</span>
                </FieldLabel>

                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="contacto-servicio-interes"
                    aria-invalid={fieldState.invalid}
                    className="min-w-30 bg-[#f7f3ec]"
                  >
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    <SelectItem value="asesoria-tributaria">Asesoría Tributaria</SelectItem>
                    <SelectItem value="contabilidad-general">Contabilidad General</SelectItem>
                    <SelectItem value="auditoria-financiera">Auditoría Financiera</SelectItem>
                    <SelectItem value="planificacion-financiera">Planificación Financiera</SelectItem>
                    <SelectItem value="gestion-empresarial">Gestión Empresarial</SelectItem>
                  </SelectContent>
                </Select>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Mensaje */}
          <Controller
            name="mensaje"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="uppercase text-ink400 font-bold" htmlFor="contacto-mensaje">
                  Mensaje
                  <span className="text-red-400">*</span>
                </FieldLabel>

                <InputGroup className="h-12 bg-[#f7f3ec] rounded-sm focus:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-gold300 focus:border-2 focus:border-[#C8A547]">
                  <InputGroupTextarea
                    {...field}
                    placeholder="Cuéntanos brevemente sobre tu empresa y lo que necesitas."
                    id="contacto-mensaje"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    disabled={isSubmitting}
                    className={isSubmitting ? "cursor-not-allowed opacity-50" : ""}
                    rows={5}
                  />
                  <InputGroupAddon>
                    <MessageCircle />
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 uppercase text-xl cursor-pointer bg-gold500 hover:bg-gold400/90 hover:scale-110 group"
            disabled={isSubmitting}
          >
            {
              isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin"/>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar
                  <Rocket className="ml-2 h-6 w-6 group-hover:rotate-45"/>
                </>
              )
            }
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
