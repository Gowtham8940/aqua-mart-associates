import { useState } from "react";
import { Check, ShieldCheck, Phone } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT, ENQUIRY_POINTS, SOURCE_OPTIONS, POWER_OPTIONS, waLink } from "../data/site";

const REQUIRED = ["name", "phone", "location"];
const initialState = {
  name: "",
  phone: "",
  location: "",
  source: "",
  tds: "",
  power: "",
  size: "",
  reqs: "",
};

const inputClasses =
  "w-full rounded-[11px] border-[1.5px] border-line bg-wash2 px-3.5 py-[13px] font-body text-[.98rem] text-ink transition-colors placeholder:text-[#8ba3b2] focus:border-teal focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal/14";

export default function EnquiryForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    REQUIRED.forEach((f) => {
      if (!values[f].trim()) nextErrors[f] = true;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const lines = [
      "*New Site Assessment Enquiry — AMA Waters*",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Location: ${values.location.trim()}`,
      values.source && `Water source: ${values.source}`,
      values.tds.trim() && `Lab / TDS: ${values.tds.trim()}`,
      values.power && `Power: ${values.power}`,
      values.size.trim() && `Community size: ${values.size.trim()}`,
      values.reqs.trim() && `Requirement: ${values.reqs.trim()}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#0b3a5b,#0e6b8c)] py-[68px] text-white md:py-[88px]" id="enquiry">
      <div
        className="pointer-events-none absolute -right-[120px] -top-[120px] h-[360px] w-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(22,183,195,.35), transparent 70%)" }}
      />

      <div className="wrap relative grid grid-cols-1 gap-8 md:grid-cols-[.92fr_1.08fr] md:items-center md:gap-12">
        <Reveal>
          <span className="mb-3.5 inline-flex items-center gap-2 font-display text-[.74rem] font-bold uppercase tracking-[.16em] text-teal-soft before:h-0.5 before:w-[26px] before:rounded-full before:bg-gradient-to-r before:from-teal before:to-green">
            Free site assessment
          </span>
          <h2 className="text-white text-[clamp(1.7rem,5.5vw,2.5rem)] text-balance">
            Tell us about your water, and we&apos;ll design the plant
          </h2>
          <p className="mt-4 text-[1.05rem] text-[#cfe6ef]">
            Share a few details about your location and water source. Our design team will assess
            feasibility and get back to you with a low-cost plant recommendation — no obligation.
          </p>

          <ul className="mt-[26px] grid gap-3.5">
            {ENQUIRY_POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-green/22 text-[#7ff0b6]">
                  <Check className="h-[15px] w-[15px]" strokeWidth={3} />
                </span>
                <span>
                  <b className="block font-display text-[.98rem] text-white">{p.title}</b>
                  <span className="text-[.86rem] text-[#bcd9e6]">{p.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-[26px] flex flex-wrap gap-3">
            <Button
              href={waLink("Hi Aqua Mart Associates, I'd like a free site assessment.")}
              target="_blank"
              rel="noopener"
              variant="wa"
              size="lg"
              icon={WhatsAppIcon}
            >
              Prefer WhatsApp?
            </Button>
            <Button href={`tel:${CONTACT.phone}`} variant="ghost" size="lg" icon={Phone}>
              Call {CONTACT.phoneShort}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-white p-6 text-ink shadow-[0_20px_50px_-12px_rgba(6,42,69,.28)] sm:p-7">
          <h3 className="text-[1.3rem] text-navy">Request your assessment</h3>
          <p className="mb-5 mt-1.5 text-[.9rem] text-muted">
            Fill what you know — even rough figures help us help you.
          </p>

          <form onSubmit={handleSubmit} noValidate className="text-left">
            <div className="mb-[15px] grid grid-cols-1 gap-3.5 xs:grid-cols-2">
              <Field label="Your name" required error={errors.name}>
                <input
                  className={inputClasses}
                  style={errors.name ? { borderColor: "#e05252" } : undefined}
                  type="text"
                  placeholder="e.g. R. Kumar"
                  value={values.name}
                  onChange={update("name")}
                />
              </Field>
              <Field label="Phone / WhatsApp" required error={errors.phone}>
                <input
                  className={inputClasses}
                  style={errors.phone ? { borderColor: "#e05252" } : undefined}
                  type="tel"
                  inputMode="tel"
                  placeholder="10-digit mobile"
                  value={values.phone}
                  onChange={update("phone")}
                />
              </Field>
            </div>

            <div className="mb-[15px]">
              <Field label="Village / community & location" required error={errors.location}>
                <input
                  className={inputClasses}
                  style={errors.location ? { borderColor: "#e05252" } : undefined}
                  type="text"
                  placeholder="e.g. Vinayagapuram, Coimbatore, TN"
                  value={values.location}
                  onChange={update("location")}
                />
              </Field>
            </div>

            <div className="mb-[15px] grid grid-cols-1 gap-3.5 xs:grid-cols-2">
              <Field label="Water source">
                <select className={inputClasses} value={values.source} onChange={update("source")}>
                  <option value="">Select source</option>
                  {SOURCE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Approx. lab / TDS result">
                <input
                  className={inputClasses}
                  type="text"
                  placeholder="e.g. 1200 ppm TDS"
                  value={values.tds}
                  onChange={update("tds")}
                />
              </Field>
            </div>

            <div className="mb-[15px] grid grid-cols-1 gap-3.5 xs:grid-cols-2">
              <Field label="Power availability">
                <select className={inputClasses} value={values.power} onChange={update("power")}>
                  <option value="">Select</option>
                  {POWER_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Community size">
                <input
                  className={inputClasses}
                  type="text"
                  placeholder="e.g. 30 families / 500 people"
                  value={values.size}
                  onChange={update("size")}
                />
              </Field>
            </div>

            <div className="mb-[15px]">
              <Field label="Your requirement">
                <textarea
                  className={`${inputClasses} min-h-[92px] resize-y`}
                  placeholder="Tell us what you need — drinking water, recycling, desalination, daily quantity, timeline…"
                  value={values.reqs}
                  onChange={update("reqs")}
                />
              </Field>
            </div>

            <Button type="submit" variant="primary" size="lg" block icon={WhatsAppIcon}>
              Send my enquiry on WhatsApp
            </Button>

            <p className="mt-3.5 flex items-start gap-2 text-[.78rem] text-muted">
              <ShieldCheck className="mt-0.5 h-[15px] w-[15px] shrink-0 text-green" />
              Your details open a ready-to-send WhatsApp message to our team. We reply within one
              working day.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block font-display text-[.82rem] font-semibold text-navy">
        {label} {required && <span className="text-green">*</span>}
      </label>
      {children}
      {error && <span className="sr-only">This field is required</span>}
    </div>
  );
}
