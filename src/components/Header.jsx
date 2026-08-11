import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT, NAV_LINKS, waLink } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-[60] bg-white/92 backdrop-blur-md border-b border-line-2">
      <div className="wrap flex items-center justify-between gap-4 min-h-[70px]">
        <a
          className="flex min-w-0 items-center gap-2.5"
          href="#top"
          aria-label="Aqua Mart Associates home"
        >
          <img
            src="/assets/logo-mark.png"
            alt="AMA Waters logo"
            width={44}
            height={44}
            className="w-11 h-11 shrink-0 object-contain rounded-full bg-white"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <b className="truncate font-display font-extrabold text-[1.08rem] text-navy tracking-tight">
              Aqua Mart Associates
            </b>
            <span className="truncate text-[.66rem] tracking-[.12em] uppercase text-brand font-semibold">
              Water Plant Designers &amp; Contractors
            </span>
          </span>
        </a>

        <nav className="hidden md:flex gap-7 items-center" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display font-semibold text-[.95rem] text-ink hover:text-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center gap-2 whitespace-nowrap font-display font-bold text-navy text-[.95rem]"
          >
            <Phone className="w-[17px] h-[17px] text-brand" />
            {CONTACT.phoneShort}
          </a>
          <Button href="#enquiry" variant="primary">
            Free Site Assessment
          </Button>
        </div>

        <button
          className="md:hidden inline-flex shrink-0 flex-col gap-[5px] p-2.5 -mr-2.5"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span
            className="w-6 h-[2.5px] bg-navy rounded-sm block"
            animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="w-6 h-[2.5px] bg-navy rounded-sm block"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-[2.5px] bg-navy rounded-sm block"
            animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-line-2 bg-white"
          >
            <div className="flex flex-col px-5 pt-2 pb-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="py-[13px] px-1 font-display font-semibold border-b border-line-2"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2.5 mt-4">
                <Button href="#enquiry" variant="primary" onClick={close} className="flex-1">
                  Site Assessment
                </Button>
                <Button
                  href={waLink("Hi Aqua Mart Associates, I'd like to know more about your water plants.")}
                  target="_blank"
                  rel="noopener"
                  variant="wa"
                  icon={WhatsAppIcon}
                  className="flex-1"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
