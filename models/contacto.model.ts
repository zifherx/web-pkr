import { InferSchemaType, model, models, Schema } from "mongoose";

const ContactoSchema = new Schema(
  {
    nombre_completo: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    telefono: { type: String, required: true },
    empresa: { type: String },
    servicio_interes: { type: String, required: true },
    mensaje: { type: String, required: true },
    ip: { type: String, default: null },
    estado: { type: String, enum: ["pendiente", "respondido"], default: "pendiente" },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export type ContactoDocument = InferSchemaType<typeof ContactoSchema>;

export const ContactoModel = models.Contacto ?? model("Contacto", ContactoSchema);
