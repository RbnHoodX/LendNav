import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroCard1 from "../assets/hero_card1.png";
import HeroCard2 from "../assets/hero_card2.png";
import HeroCard3 from "../assets/hero_card3.png";
import LogoBack from "../assets/Logo_back_red.png";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="pt-24 pb-12 md:pb-20 px-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-[500px]">
          {/* Text Content */}
          <div className="relative flex-1 flex flex-col justify-center animate-fade-in">
            <img
              src={LogoBack}
              alt="Logo background"
              className="absolute sm:top-16 sm:left-8 left-16 sm:w-[90%] h-full sm:h-auto z-0 pointer-events-none opacity-20 md:opacity-100"
            />
            <div className="relative z-10 max-w-xl">
              <div className="inline-block mb-6 px-4 py-1.5 bg-[#FF9494] text-white rounded-[10px] text-sm font-medium">
                navigating lending, together.
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Funding That's <br></br>
                <span className="text-transparent bg-clip-text bg-lendnow-gradient">
                  Creative
                </span>{" "}
                & Quick for Your Business
              </h1>
              <p className="text-sm md:text-base text-gray-800 mb-6">
                LendNav provides lending solutions that match your unique
                business personality. Compare rates, explore options, and find
                financing that's as individual as you are.
              </p>
              <Button className="bg-[#FF9494] hover:bg-lendnow-400 text-white font-medium px-6 py-2 rounded-lg inline-flex items-center gap-2 w-full md:w-auto justify-center">
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex flex-col justify-center animate-fade-in animated-delay-2">
            <div className="w-full max-w-[600px] mx-auto px-4 md:px-0">
              <div className="w-full mb-5">
                <img
                  src={HeroCard1}
                  alt="Hero Card 1"
                  className="w-full rounded-md"
                />
              </div>
              <div className="flex gap-4 w-full">
                <div className="w-1/3">
                  <img
                    src={HeroCard2}
                    alt="Hero Card 2"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-2/3">
                  <img
                    src={HeroCard3}
                    alt="Hero Card 3"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;