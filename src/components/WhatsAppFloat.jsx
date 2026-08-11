import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Hi Aqua Mart Associates, I'd like to enquire about a water plant.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-[22px] z-[65] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-green shadow-[0_10px_26px_rgba(27,166,114,.5)] md:flex"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full border-2 border-green opacity-70 [animation-duration:2.4s]" />
      <WhatsAppIcon className="h-8 w-8 text-white" />
    </motion.a>
  );
}
