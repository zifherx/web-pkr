"use client";

import { TIKTOK_EMBED_PROPS } from "../../types";

export function TikTokEmbed({ videId }: TIKTOK_EMBED_PROPS) {
  return (
    <div className="flex justify-center w-full">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videId}`}
        className="rounded-sm border border-gold400/10"
        style={{
          width: "325px",
          height: "780px",
          maxWidth: "100%",
        }}
        allowFullScreen
        allow="encrypted-media"
        loading="lazy"
        title={`TikTok video ${videId}`}
      />
    </div>
  );
}
