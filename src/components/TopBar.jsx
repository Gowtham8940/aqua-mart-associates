import { Phone, Mail } from "lucide-react";
import { CONTACT } from "../data/site";

export default function TopBar() {
  return (
    <div className="bg-deep text-[#cfe6ef] text-[.82rem]">
      <div className="wrap flex justify-between items-center gap-4 min-h-[38px] flex-wrap py-1.5">
        <div className="flex gap-5 items-center flex-wrap">
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-[#eaf6fa] font-semibold inline-flex items-center gap-1.5 hover:text-teal-soft transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-[#eaf6fa] font-semibold inline-flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:text-teal-soft transition-opacity"
          >
            <Mail className="w-3.5 h-3.5 text-teal" />
            {CONTACT.email}
          </a>
        </div>
        <div className="opacity-85 hidden xs:block">
          Serving villages, communities &amp; municipalities across India
        </div>
      </div>
    </div>
  );
}
