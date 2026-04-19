import { connectDB } from "@/lib/mongodb";

import { ContactoModel } from "@/models/contacto.model";
import { ContactoInput } from "@/validation/contacto.validation";

import { ContactoRecord, IContactoRepository } from "@/interfaces";

class MongoContactoRepository implements IContactoRepository {
    async guardar(data: ContactoInput, ip?: string): Promise<ContactoRecord>{
        await connectDB();
        const doc = await ContactoModel.create({...data, ip: ip ?? null})
        return doc.toObject() as ContactoRecord;
    }
}

export const contactoRepository: IContactoRepository = new MongoContactoRepository();