import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Button from "./Button";
import { PROJECTS } from "../data/site";

export default function Projects() {
  return (
    <section className="py-[68px] md:py-[88px]" id="projects">
      <div className="wrap">
        <SectionHead
          eyebrow="Completed projects"
          title="Real plants, running in real communities"
          desc="The best proof of a water plant is one that has been quietly delivering clean water for years. Here is a sample of what we have designed, built and installed."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full overflow-hidden rounded-2xl border border-line-2 bg-white shadow-[0_1px_2px_rgba(6,42,69,.06),0_8px_24px_rgba(6,42,69,.08)] hover:shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)] transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-wash">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-green px-[11px] py-1.5 font-display text-[.76rem] font-bold text-white shadow-[0_4px_10px_rgba(0,0,0,.2)]">
                    {p.tag}
                  </span>
                  <img
                    src={`/assets/${p.img}`}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-[18px] pb-5">
                  <h3 className="text-[1.12rem] mb-1.5">{p.title}</h3>
                  <p className="text-[.9rem] text-muted">{p.desc}</p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[.86rem] text-muted">
                    <MapPin className="h-[15px] w-[15px] text-brand shrink-0" />
                    {p.loc}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-wash px-2.5 py-1 font-display text-[.72rem] font-semibold text-brand"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Button href="#enquiry" variant="primary" size="lg" icon={ArrowRight} iconRight>
            Discuss your project
          </Button>
        </div>
      </div>
    </section>
  );
}
