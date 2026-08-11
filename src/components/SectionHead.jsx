import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, desc, light = false }) {
  return (
    <Reveal className="mb-9 max-w-[640px]">
      <span
        className={`mb-3.5 inline-flex items-center gap-2 font-display text-[.74rem] font-bold uppercase tracking-[.16em] before:h-0.5 before:w-[26px] before:rounded-full before:bg-gradient-to-r before:from-teal before:to-green ${
          light ? "text-teal-soft" : "text-brand"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`text-[clamp(1.7rem,5vw,2.5rem)] text-balance ${light ? "text-white" : ""}`}>{title}</h2>
      {desc && <p className={`mt-3.5 text-[1.05rem] ${light ? "text-[#cfe6ef]" : "text-muted"}`}>{desc}</p>}
    </Reveal>
  );
}
