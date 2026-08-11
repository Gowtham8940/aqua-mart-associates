// Central content/config for Aqua Mart Associates site.
// Keeping copy + structured data here keeps components presentational and
// makes the content easy to update without touching markup/logic.

export const CONTACT = {
  phone: "+919487663166",
  phoneDisplay: "+91 94876 63166",
  phoneShort: "94876 63166",
  email: "aquamart123@gmail.com",
  address:
    "127-D, Kamban St, Vinayagapuram, V.K. Road, Saravanampatti Po, Coimbatore – 641 035",
};

export const waLink = (text) =>
  `https://wa.me/${CONTACT.phone.replace("+", "")}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const CITIES = ["New Delhi", "Noida", "Lucknow", "Jaipur", "Pune", "Bhopal", "Coimbatore"];

export const CERTS = [
  { icon: "ShieldCheck", label: "Aligned with", bold: "Jal Jeevan Mission" },
  { icon: "Award", label: "", bold: "NSF-approved", suffix: " storage & components" },
  { icon: "FileCheck2", label: "In-house", bold: "design & fabrication" },
];

export const HERO_STATS = [
  { icon: "Droplets", value: "20+ yrs", label: "Water treatment expertise" },
  { icon: "Clock", value: "24×7", label: "Uninterrupted supply" },
  { icon: "ShieldCheck", value: "Nil", label: "Breakdown promise" },
];

export const STATS = [
  { value: "20+", label: "Years in business" },
  { value: "7", label: "States served" },
  { value: "3 yr", label: "Monitoring contracts" },
  { value: "24×7", label: "Water uptime" },
];

export const SERVICES = [
  {
    icon: "Droplet",
    title: "Village RO Plants",
    desc: "Automated community plants that serve 20–30 families with safe drinking water — low maintenance, operator-light and solar compatible.",
    meta: ["2000 LPD", "Solar ready"],
  },
  {
    icon: "Building2",
    title: "Gated-Community RO Plants",
    desc: "Pressure-tank RO systems with digital control panels for apartments and RWAs — clean water on tap, protected from dust and insects.",
    meta: ["Digital PLC", "Pressure tank"],
  },
  {
    icon: "Waves",
    title: "Desalination Plants",
    desc: "Brackish groundwater (BW) desalination for inland and arid areas — turning salty, unusable water into drinking, irrigation and industrial supply.",
    meta: ["Brackish BW", "Inland & arid"],
  },
  {
    icon: "Recycle",
    title: "Water Recycling Systems",
    desc: "Recycling RO with automated backwash that recovers more water from wastage — cutting both consumption and running cost for large sites.",
    meta: ["Auto backwash", "Low wastage"],
  },
];

export const CAPABILITIES = [
  "Digital control panels & automation",
  "Wall-mounted RO (TDS < 700 ppm)",
  "Motorised valve filtration & softening",
  "Portable RO refill units",
  "Annual Maintenance Contracts",
  "Retrofitting existing plants",
];

export const WHY_US = [
  {
    icon: "Trophy",
    title: "Turnkey design & build",
    desc: "20 years of our own designs in fabrication, control panels and membrane cleaning — one team from site survey to running plant.",
  },
  {
    icon: "IndianRupee",
    title: "Low-cost engineering",
    desc: "Automated, operator-light plants and replaceable modules keep maintenance as low as possible — vital in tough economic times.",
  },
  {
    icon: "Globe2",
    title: "Pan-India presence",
    desc: "From Coimbatore to New Delhi, Lucknow, Jaipur, Pune and beyond — plants delivered, installed and monitored across the country.",
  },
  {
    icon: "Wrench",
    title: "After-sales & nil breakdowns",
    desc: "We replace components instead of tinkering on-site, and sign 3-year monitoring contracts — so water keeps flowing 24×7.",
  },
];

export const PROJECTS = [
  {
    img: "community-plants.jpg",
    tag: "2000 LPD",
    title: "Community RO Cluster",
    desc: "Multi-unit village drinking-water network serving several hundred families.",
    loc: "Village Panchayat · near Coimbatore",
    tags: ["Drinking water", "Panchayat"],
  },
  {
    img: "enclosed-plant.jpg",
    tag: "2000 LPD",
    title: "Enclosed Recycling RO Plant",
    desc: "Fully enclosed, dust-proof recycling RO with digital control — solar compatible.",
    loc: "Gated Community · Noida",
    tags: ["Recycling RO", "Solar ready"],
  },
  {
    img: "tanks-install.jpg",
    tag: "4000 LPH",
    title: "Filtration & Softening Plant",
    desc: "Motorised multi-port vessels for municipality-scale water filtration and softening.",
    loc: "Municipality · Lucknow",
    tags: ["SMPV vessels", "Softening"],
  },
  {
    img: "control-cabinets.jpg",
    tag: "Digital PLC",
    title: "Automation Control Panels",
    desc: "PLC, flow meters, quality sensors and touch-screen control for hands-free operation.",
    loc: "Industrial Park · Pune",
    tags: ["PLC & SCADA", "Touch screen"],
  },
  {
    img: "service-delivery.jpg",
    tag: "On-site",
    title: "Turnkey Site Installation",
    desc: "Our trained youth teams install and commission plants from the grass-root level up.",
    loc: "Community Project · Jaipur",
    tags: ["Commissioning", "Training"],
  },
  {
    img: "scada-room.jpg",
    tag: "Live QC",
    title: "Monitoring & Quality Control",
    desc: "Distribution and quality monitored digitally — three years of quantity & quality assurance.",
    loc: "Multi-site · Bhopal region",
    tags: ["Remote QC", "3-yr contract"],
  },
];

export const ENQUIRY_POINTS = [
  {
    title: "Free feasibility & costing",
    desc: "We assess your water source and community size at no cost.",
  },
  {
    title: "Reply on WhatsApp or call",
    desc: "Whichever is easiest for you — we run on WhatsApp Business.",
  },
  {
    title: "Government & NGO friendly",
    desc: "Experienced with panchayat, municipal and NGO water projects.",
  },
];

export const SOURCE_OPTIONS = [
  "Borewell",
  "Open well",
  "River / canal",
  "Municipal supply",
  "Brackish groundwater",
  "Sea water",
  "Not sure",
];

export const POWER_OPTIONS = ["Single phase", "Three phase", "Solar", "Limited / intermittent"];
