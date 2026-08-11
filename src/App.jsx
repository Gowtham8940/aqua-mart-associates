import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import MobileBar from "./components/MobileBar";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Below-the-fold sections are code-split so the initial bundle only pays for
// what's needed to paint the hero. Each chunk loads in the background once
// the browser is idle / the user starts scrolling towards it.
const WhyUs = lazy(() => import("./components/WhyUs"));
const Projects = lazy(() => import("./components/Projects"));
const EnquiryForm = lazy(() => import("./components/EnquiryForm"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback({ tone = "light" }) {
  return (
    <div
      className={`h-[420px] w-full animate-pulse ${
        tone === "light" ? "bg-wash" : tone === "dark" ? "bg-deep" : "bg-white"
      }`}
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <TopBar />
      <Header />
      <span id="top" />
      <Hero />
      <TrustBar />
      <Services />
      <Suspense fallback={<SectionFallback tone="light" />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionFallback tone="base" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback tone="dark" />}>
        <EnquiryForm />
      </Suspense>
      <Suspense fallback={<SectionFallback tone="light" />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback tone="dark" />}>
        <Footer />
      </Suspense>
      <MobileBar />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
