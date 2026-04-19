import { NextRequest, NextResponse } from "next/server";

import { contactoService } from "@/services/server/contacto.service";
import { ZodError } from "zod/v3";
import { ContactoSchema } from "@/validation/contacto.validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = ContactoSchema.parse(body);

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? undefined;

    await contactoService.enviar(data, ip);

    return NextResponse.json({ success: true, message: "Correos enviados correctamente" }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Datos inválidos", details: err.flatten().fieldErrors }, { status: 422 });
    }

    console.error("[api/mailing]", err);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
