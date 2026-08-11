import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { CITIES, CERTS, STATS } from "../data/site";

export default function TrustBar() {
  return (
    <section className="border-b border-line-2 bg-white" aria-label="Where we work and our credentials">
      <div className="wrap py-[26px] md:grid md:grid-cols-[1.15fr_.85fr] md:items-center md:gap-10">
        <Reveal>
          <div className="mb-3.5 flex items-center gap-2.5 font-display text-[.9rem] font-bold text-navy">
            <MapPin className="h-[18px] w-[18px] text-brand" />
            Plants delivered &amp; serviced across
          </div>
          <div className="flex flex-wrap gap-2.5">
            {CITIES.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-wash px-[13px] py-[7px] font-display text-[.85rem] font-semibold text-navy"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {c}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {CERTS.map((c) => (
              <span
                key={c.bold}
                className="inline-flex items-center gap-2.5 rounded-[10px] border border-dashed border-line bg-white px-[13px] py-2 text-[.82rem] font-medium text-muted"
              >
                <Icon name={c.icon} className="h-[17px] w-[17px] shrink-0 text-green" />
                {c.label ? `${c.label} ` : ""}
                <b className="font-display text-navy">{c.bold}</b>
                {c.suffix}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4 md:mt-0">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-2xl border border-line-2 bg-white px-[18px] py-5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-teal after:to-green"
            >
              <b className="block font-display text-[2rem] font-extrabold leading-none text-navy">{s.value}</b>
              <span className="mt-1.5 block text-[.85rem] text-muted">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
