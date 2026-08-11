import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Icon from "./Icon";
import { SERVICES, CAPABILITIES } from "../data/site";

export default function Services() {
  return (
    <section className="py-[68px] md:py-[88px]" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Plant types we build"
          title="One partner for every community water need"
          desc="From a single village borewell to a gated-community network, we design the right plant for your water source, budget and family count — then build, install and maintain it."
        />

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-line-2 bg-white p-6 shadow-[0_1px_2px_rgba(6,42,69,.06),0_8px_24px_rgba(6,42,69,.08)] hover:shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)] transition-shadow"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-200 group-hover:border-teal/40" />
                <div className="mb-[18px] grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand/12 to-teal/16 text-brand">
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="text-[1.22rem] mb-2">{s.title}</h3>
                <p className="text-[.95rem] text-muted">{s.desc}</p>
                <div className="mt-[15px] mb-1 flex flex-wrap gap-3.5">
                  {s.meta.map((m) => (
                    <span
                      key={m}
                      className="rounded-lg bg-wash px-2.5 py-[5px] font-display text-[.78rem] font-bold text-navy"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <a
                  href="#enquiry"
                  className="mt-4 inline-flex items-center gap-1.5 font-display text-[.92rem] font-bold text-brand"
                >
                  Enquire
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[30px] flex flex-wrap gap-2.5">
          {CAPABILITIES.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-[15px] py-2 font-display text-[.83rem] font-semibold text-navy"
            >
              <Check className="h-3.5 w-3.5 text-green" strokeWidth={3} />
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
