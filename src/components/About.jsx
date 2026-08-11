import { Target, Compass } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="bg-wash py-[68px] md:py-[88px]" id="about">
      <div className="wrap">
        <SectionHead
          eyebrow="About Aqua Mart Associates"
          title="Clean water for the next generation — and jobs for local youth"
        />

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.3fr_.7fr] md:gap-12">
          <Reveal className="[&_p]:mt-4 [&_p]:text-muted [&_strong]:text-ink">
            <p>
              For two decades, <strong>Aqua Mart Associates (AMA Waters)</strong> has designed and
              built water treatment plants that bring clean, safe drinking water to villages, gated
              communities and remote areas — places where reliable water changes daily life.
            </p>
            <p>
              Our expertise has produced our own designs in fabrication, control panels and
              membrane cleaning. Post-Covid, demand grew for automated plants serving 20–30
              families in both urban and rural areas, with maintenance kept as low as possible. We
              answer that with plants known in the market for <strong>nil breakdowns</strong> — we
              replace components instead of tinkering on-site, keeping water flowing 24×7.
            </p>
            <p>
              As an employment initiative, we train <strong>school-educated youngsters</strong> from
              the grass-root level to monitor our plants — building skills and livelihoods alongside
              water infrastructure. We enter into three-year contracts with clients so men and
              machine expenses are amortised, costs stay low, and water quality and quantity are
              monitored throughout.
            </p>

            <div className="mt-[26px] grid gap-3.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white p-5">
                <h4 className="mb-2.5 flex items-center gap-2 font-display text-[.78rem] font-bold uppercase tracking-[.14em] text-brand">
                  <Compass className="h-4 w-4" />
                  Vision
                </h4>
                <p className="!mt-0 text-[.94rem] text-muted">
                  To become a global market leader in customised drinking-water and wastewater
                  treatment solutions across domestic and international sectors — bringing
                  happiness and prosperity to communities.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <h4 className="mb-2.5 flex items-center gap-2 font-display text-[.78rem] font-bold uppercase tracking-[.14em] text-brand">
                  <Target className="h-4 w-4" />
                  Mission
                </h4>
                <p className="!mt-0 text-[.94rem] text-muted">
                  To employ the best methods in science and technology, use natural resources
                  effectively, and deliver quality products quickly through constantly trained
                  employees — with 100% customer satisfaction.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="rounded-3xl border border-line bg-[linear-gradient(160deg,#fff,var(--color-wash))] p-6 shadow-[0_1px_2px_rgba(6,42,69,.06),0_8px_24px_rgba(6,42,69,.08)]">
            <div className="mx-auto mb-[18px] max-w-[230px] overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)]">
              <img
                src="/assets/ceo.jpg"
                alt="K. Saravana Muthu, CEO and Design Head of Aqua Mart Associates"
                loading="lazy"
                className="aspect-[3/3.4] w-full object-cover object-top"
              />
            </div>
            <h3 className="text-center text-[1.3rem]">K. Saravana Muthu</h3>
            <div className="mt-1 text-center font-display text-[.9rem] font-bold text-brand">
              CEO &amp; Design Head
            </div>
            <div className="mt-[18px] rounded-r-xl border-l-[3px] border-teal bg-white px-[18px] py-4 text-[.95rem] italic text-ink">
              <span className="align-[-2px] font-display text-[1.4rem] font-extrabold not-italic leading-none text-teal">
                &ldquo;
              </span>
              Focus on healthy water for the next generation — and develop employment along the
              way.
              <span className="align-[-2px] font-display text-[1.4rem] font-extrabold not-italic leading-none text-teal">
                &rdquo;
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
