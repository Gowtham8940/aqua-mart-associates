import {
  Droplets,
  Droplet,
  Clock,
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
  Waves,
  Recycle,
  Trophy,
  IndianRupee,
  Globe2,
  Wrench,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Check,
  ArrowRight,
  Menu,
  X,
  ShieldCheck as Shield,
} from "lucide-react";

// Central registry so data files can reference icons by string name
// (keeps content/config decoupled from the icon library import).
const REGISTRY = {
  Droplets,
  Droplet,
  Clock,
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
  Waves,
  Recycle,
  Trophy,
  IndianRupee,
  Globe2,
  Wrench,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Check,
  ArrowRight,
  Menu,
  X,
  Shield,
};

export default function Icon({ name, className = "w-5 h-5", ...rest }) {
  const Cmp = REGISTRY[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={2} {...rest} />;
}
