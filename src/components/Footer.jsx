import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT, CITIES, waLink } from "../data/site";

const SPECIALISMS = ["Community water projects", "Plant design", "Automation", "Spares & AMC"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-deep pb-[30px] pt-14 text-[#c7dde8]" id="contact">
      <div className="wrap">
        <Reveal className="mb-12 rounded-3xl bg-gradient-to-br from-brand to-navy p-7 text-center shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)]">
          <h2 className="text-white text-[clamp(1.5rem,4.5vw,2.1rem)]">
            Ready for clean, reliable water?
          </h2>
          <p className="mx-auto mt-2.5 max-w-[520px] text-[#d6ebf3]">
            Talk to our design team today. Call us, message us on WhatsApp, or request a free site
            assessment.
          </p>
          <a
            href={`tel:${CONTACT.phone}`}
            className="mt-[22px] inline-flex items-center gap-3 rounded-2xl bg-white px-[26px] py-3.5 font-display text-[clamp(1.3rem,5vw,1.7rem)] font-extrabold text-navy shadow-[0_10px_24px_rgba(0,0,0,.2)]"
          >
            <Phone className="h-[26px] w-[26px] text-green" />
            {CONTACT.phoneDisplay}
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button
              href={waLink("Hi Aqua Mart Associates, I'd like to enquire about a water plant.")}
              target="_blank"
              rel="noopener"
              variant="wa"
              size="lg"
              icon={WhatsAppIcon}
            >
              WhatsApp Us
            </Button>
            <Button href="#enquiry" variant="ghost" size="lg">
              Free Site Assessment
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <img src="/assets/logo-mark.png" alt="AMA Waters logo" className="h-[52px] w-[52px] rounded-full bg-white p-0.5" />
            <b className="mt-3 block font-display text-[1.2rem] font-extrabold text-white">
              Aqua Mart Associates
            </b>
            <p className="mt-2.5 max-w-[320px] text-[.9rem] text-[#9fc0cf]">
              Water plant designers &amp; contractors. Specialists in community water projects,
              plant design, automation and maintenance across India.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[.82rem] uppercase tracking-[.12em] text-white">
              Reach us
            </h4>
            <ul className="grid gap-2.5">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-2.5 text-[.92rem] text-[#b9d3df] hover:text-teal-soft transition-colors">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener"
                  className="flex items-start gap-2.5 text-[.92rem] text-[#b9d3df] hover:text-teal-soft transition-colors"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 text-[.92rem] text-[#b9d3df] hover:text-teal-soft transition-colors">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[.92rem] text-[#b9d3df]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[.82rem] uppercase tracking-[.12em] text-white">
              Cities we serve
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {CITIES.map((c) => (
                <span key={c} className="rounded-md bg-white/8 px-2.5 py-[5px] text-[.78rem] text-[#cfe6ef]">
                  {c}
                </span>
              ))}
            </div>
            <h4 className="mb-4 mt-[22px] font-display text-[.82rem] uppercase tracking-[.12em] text-white">
              Specialists in
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {SPECIALISMS.map((c) => (
                <span key={c} className="rounded-md bg-white/8 px-2.5 py-[5px] text-[.78rem] text-[#cfe6ef]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-[22px] text-[.82rem] text-[#8fb2c2]">
          <span>© 2021–{year} Aqua Mart Associates · AMA Waters. All rights reserved.</span>
          <span>Focus on healthy water for the next generation.</span>
        </div>
      </div>
    </footer>
  );
}
