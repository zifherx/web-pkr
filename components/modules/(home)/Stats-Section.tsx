import { STATS_HOME_PROPS } from "@/types";
import CountUp from "react-countup";

export function StatsSection({ stats }: STATS_HOME_PROPS) {
  return (
    <section id="stats" className="bg-navyMid border-b border-gold400/10 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="text-center px-4 py-14 border-r border-white/5 last:border-r-0 "
            >
              <CountUp
                start={0}
                end={item.value}
                suffix={item.suffix}
                autoAnimate
                autoAnimateDelay={5}
                className="text-5xl text-gold400"
              />
              <h4 className="text-white/50 text-sm mt-2 tracking-[0.05em]">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
