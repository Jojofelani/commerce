import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import BeforeAfter from "components/layout/before-after";
import Footer from "components/layout/footer";
import Hero from "components/layout/hero";
import StatsStrip from "components/layout/stats-strip";
import Testimonials from "components/layout/testimonials";
import TrustSection from "components/layout/trust-section";

export const metadata = {
  description:
    "LaserGlow — professional-grade dental whitening, dentist-formulated for enamel safety and visible results.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ThreeItemGrid />
      <BeforeAfter />
      <TrustSection />
      <Carousel />
      <Testimonials />
      <Footer />
    </>
  );
}
