import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Icon from "./Icon";
import { WHY_US } from "../data/site";

export default function WhyUs() {
  return (
    <section className="bg-wash py-[68px] md:py-[88px]" id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why communities choose us"
          title="Built to last, priced for real budgets"
          desc="Our plants are a valuable asset to government and non-government bodies bringing clean water to remote areas — because we engineer for uptime, not just installation."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full gap-4 rounded-2xl border border-line-2 bg-white p-[22px]"
              >
                <div className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-xl bg-navy text-white">
                  <Icon name={w.icon} className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[1.1rem] mb-1.5">{w.title}</h3>
                  <p className="text-[.92rem] text-muted">{w.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
