import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroCard1 from "../assets/hero_card1.png";
import HeroCard2 from "../assets/hero_card2.png";
import HeroCard3 from "../assets/hero_card3.png";
import LogoBack from "../assets/Logo_back_red.png";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-24 px-4 md:pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-6 w-fillRule max-w-lg animate-fade-in">
            {/* Background Elements */}
            <img
              src={LogoBack}
              alt="Logo"
              className="w-[80%] absolute top-[20px] left-[20px] z-0 pointer-events-none"
            />
            <div className="relative z-10">
              <div className="inline-block mb-6 px-4 py-1.5 bg-[#FF9494] text-lendnow-50 rounded-[10px] text-sm font-medium">
                navigating lending, together.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Funding That's{" "}
                <span className="text-transparent bg-clip-text bg-lendnow-gradient">
                  Creative
                </span>{" "}
                & Quick for Your Business
              </h1>
              <p className="text-md text-gray-900 mb-6">
                LendNav provides lending solutions that match your unique
                business personality. Compare rates, explore options, and find
                financing that's as individual as you are.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF9494] hover:bg-lendnow-400 text-white font-medium px-6 py-2 rounded-lg">
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
          </div>

          <div className="relative w-full animate-fade-in animated-delay-2">
            <div>
              {/* First row: hero_card1 spans all 3 columns */}
              <div className="w-full">
                <img
                  src={HeroCard1}
                  alt="Hero Card 1"
                  className="w-full h-auto rounded-md mb-5"
                />
              </div>

              <div className="flex w-full">
                {/* Second row: hero_card2 spans 1/3 and hero_card3 spans 2/3 */}
                <div className="mr-5">
                  <img
                    src={HeroCard2}
                    alt="Hero Card 2"
                    className="w-auto h-52 rounded-md mb-2"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={HeroCard3}
                    alt="Hero Card 3"
                    className="w-full h-52 rounded-md mb-2"
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
