import { ContactoResponse } from "@/interfaces";
import { httpClient } from "@/lib/http-client";
import { ContactoInput } from "@/validation/contacto.validation";

export async function enviarContacto(data: ContactoInput): Promise<ContactoResponse>{
    const {data: response} = await httpClient.post<ContactoResponse>('/mailing', data)
    return response;
}