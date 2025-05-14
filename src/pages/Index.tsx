import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Commercial from "@/components/Commercial";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import GrowthAllies from "@/components/GrowthAllies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-jakarta">
      <Navbar />
      <Hero />
      <Solutions />
      <Commercial />
      <Process />
      <Industries />
      <GrowthAllies />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
