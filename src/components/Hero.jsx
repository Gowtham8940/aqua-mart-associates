import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import Icon from "./Icon";
import { HERO_STATS, waLink } from "../data/site";

const easeOut = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[52px] text-white bg-[linear-gradient(160deg,#0b3a5b_0%,#0e5f7f_52%,#0e7ea3_100%)]">
      {/* decorative radial glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 400px at 82% 8%, rgba(22,183,195,.35), transparent 60%), radial-gradient(700px 500px at 10% 90%, rgba(27,166,114,.18), transparent 60%)",
        }}
      />

      <div className="wrap relative grid grid-cols-1 gap-9 pb-[120px] md:grid-cols-[1.08fr_.92fr] md:items-center md:gap-12 md:pb-[150px]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-[22px] inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-white/22 bg-white/12 px-[15px] py-2 font-display text-[.8rem] font-semibold text-[#eafaff]"
          >
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_0_4px_rgba(27,166,114,.28)]" />
            Trusted for <b className="text-white">20+&nbsp;years</b> · Coimbatore-based, pan-India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
            className="text-white text-[clamp(2.05rem,7.2vw,3.7rem)] tracking-[-.03em]"
          >
            Low-Cost{" "}
            <span className="bg-[linear-gradient(100deg,#a7e4ea,#8effc9)] bg-clip-text text-transparent">
              Water Recycling, Desalination &amp; RO Plants
            </span>{" "}
            for Villages &amp; Communities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: easeOut }}
            className="mt-5 max-w-[560px] text-[1.12rem] text-[#d6ebf3]"
          >
            We design, build and monitor turnkey water treatment plants for panchayats, gated
            communities and small municipalities — clean, safe drinking water 24×7, engineered for
            low cost and nil breakdowns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: easeOut }}
            className="mt-[30px] flex flex-wrap gap-3.5"
          >
            <Button href="#enquiry" variant="primary" size="lg" icon={CheckCircle2}>
              Get a Free Site Assessment
            </Button>
            <Button
              href={waLink("Hi Aqua Mart Associates, I'd like a free site assessment for a water plant.")}
              target="_blank"
              rel="noopener"
              variant="wa"
              size="lg"
              icon={WhatsAppIcon}
            >
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: easeOut }}
            className="mt-[34px] flex flex-wrap gap-x-8 gap-y-5 border-t border-white/16 pt-[26px]"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <Icon name={s.icon} className="h-[22px] w-[22px] text-teal" />
                <span className="flex flex-col leading-tight">
                  <b className="font-display text-[1.4rem] font-extrabold text-white">{s.value}</b>
                  <span className="text-[.82rem] text-[#bcd9e6]">{s.label}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative grid grid-cols-1 gap-3.5">
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.5, ease: easeOut }}
            className="absolute right-0 top-3.5 z-[3] flex items-center gap-2.5 rounded-2xl bg-white px-[15px] py-3 text-ink shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)]"
          >
            <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] bg-green/12 text-green">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <span>
              <b className="block font-display text-[.92rem] text-navy">Jal Jeevan aligned</b>
              <span className="text-[.72rem] text-muted">Clean water for rural India</span>
            </span>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="relative m-0 aspect-[16/10] overflow-hidden rounded-3xl border-[5px] border-white/90 shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)]"
          >
            <img
              src="/assets/plant-flagship.jpg"
              alt="Fully enclosed 2000 LPD recycling RO plant built by Aqua Mart Associates"
              fetchpriority="high"
              loading="eager"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-[11px] bg-deep/82 px-[13px] py-2.5 font-display text-[.8rem] font-semibold text-white backdrop-blur-sm">
              <Icon name="ShieldCheck" className="h-[15px] w-[15px] shrink-0 text-teal" />
              2000 LPD enclosed recycling RO — solar compatible
            </figcaption>
          </motion.figure>

          <div className="grid grid-cols-2 gap-3.5">
            {[
              { src: "community-plants.jpg", alt: "Row of community RO plants installed in a village" },
              { src: "drinking-water.jpg", alt: "Person drinking clean treated water" },
            ].map((m, i) => (
              <motion.figure
                key={m.src}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease: easeOut }}
                className="m-0 aspect-square overflow-hidden rounded-3xl border-[5px] border-white/90 shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)]"
              >
                <img src={`/assets/${m.src}`} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-px z-[2] leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
