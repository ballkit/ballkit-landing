import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const href = target.getAttribute("href");
        if (!href) return;

        e.preventDefault();
        const element = document.querySelector(href);
        if (!element) return;

        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: offsetTop - 100, // Adjust for header height
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <TargetAudience /> */}
      {/* <WhoWeAre /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
