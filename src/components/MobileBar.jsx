import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT, waLink } from "../data/site";

export default function MobileBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[70] flex gap-px border-t border-line bg-line shadow-[0_-6px_20px_rgba(6,42,69,.14)] md:hidden"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${CONTACT.phone}`}
        className="flex flex-1 items-center justify-center gap-2 bg-white px-2 py-3.5 font-display text-[.94rem] font-bold text-brand"
      >
        <Phone className="h-[19px] w-[19px]" />
        Call
      </a>
      <a
        href={waLink("Hi Aqua Mart Associates, I'd like to enquire about a water plant.")}
        target="_blank"
        rel="noopener"
        className="flex flex-1 items-center justify-center gap-2 bg-green px-2 py-3.5 font-display text-[.94rem] font-bold text-white"
      >
        <WhatsAppIcon className="h-[19px] w-[19px]" />
        WhatsApp
      </a>
      <a
        href="#enquiry"
        className="flex flex-1 items-center justify-center gap-2 bg-navy px-2 py-3.5 font-display text-[.94rem] font-bold text-white"
      >
        Free Assessment
      </a>
    </nav>
  );
}
