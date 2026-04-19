import { TIKTOK_SECTION_PROPS } from "@/types";
import { RevealWrapper } from "../../shared/Reveal-Wrapper";
import { TikTokCarousel } from "../../shared/TikTok-Carousel";

export function TikTokSection({ videos }: TIKTOK_SECTION_PROPS) {
  if (videos.length === 0) return null;

  return (
    <section id="tikkok" className="py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <RevealWrapper direction="right">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold400" />
            <span className="uppercase text-gold400 text-xs font-semibold tracking-[0.3em]">Síguenos</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Contenido que <em className="text-gold400 not-italic font-light">educa</em>
            </h2>

            <a
              href="https://www.tiktok.com/@pkrcontadorestrib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold400 border border-gold400/30 px-5 py-2.5 hover:bg-gold400/10 transition-colors shrink-0"
            >
              Ver perfil en Tiktok
            </a>
          </div>
        </RevealWrapper>

        <TikTokCarousel embeds={videos} />
      </div>
    </section>
  );
}
