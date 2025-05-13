import { Button } from "@/components/ui/button";
import LogoBack from "../assets/Logo_funded.png";

const CallToAction = () => {
  return (
    <section className="relative py-10 bg-[#FF9494] text-[#472121] mx-16 rounded-sm translate-y-[30px]">
      <img
        src={LogoBack}
        alt="Logo"
        className="absolute h-full bottom-0 right-0 -z-10"
      />
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-2">Let's get you funded</h2>
            <p className="text-sm opacity-90">
              Flexible, fast financing—tailored to you.
            </p>
          </div>

          {/* Right Section: Buttons */}
          <div className="flex flex-col flex-wrap justify-center md:justify-end gap-4">
            <Button
              size="lg"
              className="bg-[#222222] text-gray-100 hover:bg-[#333333]"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
