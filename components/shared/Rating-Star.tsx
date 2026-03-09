import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { RATING_STAR_PROPS } from "@/types";

export function RatingStar({ rating }: RATING_STAR_PROPS) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={cn(
            i < rating ? "fill-gold400 text-gold400" : "text-gray-300",
          )}
        />
      ))}
    </div>
  );
}
