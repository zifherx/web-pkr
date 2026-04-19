import { ContentSection } from "@/components/modules/(contacto)/Content-Section";
import { HeaderSection } from "@/components/modules/(contacto)/Header-Section";

export function ContactoView() {
  return (
    <div className="min-h-screen bg-pastel">
      <HeaderSection />
      <ContentSection />
    </div>
  );
}
