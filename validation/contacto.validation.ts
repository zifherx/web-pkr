import z from "zod/v3";

export const ContactoSchema = z.object({
  nombre_completo: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre no puede exceder los 100 caracteres")
    .trim(),
  email: z.string().email("El correo no tiene formato válido"),
  telefono: z.string().length(9, "El celular debe tener 9 caracteres"),
  empresa: z.string().optional(),
  servicio_interes: z.string().min(1, "Debe seleccionar al menos 1 servicio de interés"),
  mensaje: z
    .string()
    .min(1, "El mensaje debe ser mayor a 1 caracter")
    .max(500, "El mensaje no puede superar los 500 caracteres"),
});

export type ContactoInput = z.infer<typeof ContactoSchema>;
