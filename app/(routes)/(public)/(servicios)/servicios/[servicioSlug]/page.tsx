import { servicesList } from "@/data/public.data";
import { ServicioSlugView } from "./components/Servicio-Slug-View";

export async function generateStaticParams() {
  return servicesList.map((item) => {
    return { servicioSlug: item.slug };
  });
}

export default async function ServicioSlugPage({ params }: { params: Promise<{ servicioSlug: string }> }) {
  const resolvedParams = await params;
  const { servicioSlug } = resolvedParams;

  return <ServicioSlugView slug={servicioSlug} />;
}
