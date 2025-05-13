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
      className="relative pt-24 pb-12 md:pt-24 px-4 md:pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="flex items-center">
        <img
          src={LogoBack}
          alt="Logo"
          className="w-[400px] absolute top-[10vw] lg:top-[100px] lg:left-[250px]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-[#FF9494] text-lendnow-50 rounded-[10px] text-sm font-medium">
              navigating lending, together.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Funding That's{" "}
              <span className="text-transparent bg-clip-text bg-lendnow-gradient">
                Creative
              </span>{" "}
              & Quick for Your Business
            </h1>
            <p className="text-lg text-gray-600">
              LendNav provides lending solutions that match your unique business
              personality. Compare rates, explore options, and find financing
              that's as individual as you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#FF9494] hover:bg-lendnow-400 text-white font-medium px-6 py-2 rounded-lg">
                Apply Now
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in animated-delay-2">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* First row: hero_card1 spans all 3 columns */}
                <div className="col-span-3">
                  <img
                    src={HeroCard1}
                    alt="Hero Card 1"
                    className="w-full h-80 object-cover rounded-md mb-2"
                  />
                </div>

                {/* Second row: hero_card2 spans 1/3 and hero_card3 spans 2/3 */}
                <div className="col-span-1">
                  <img
                    src={HeroCard2}
                    alt="Hero Card 2"
                    className="w-full h-52 object-cover rounded-md mb-2"
                  />
                </div>
                <div className="col-span-2 rounded-lg">
                  <img
                    src={HeroCard3}
                    alt="Hero Card 3"
                    className="w-full h-52 object-cover rounded-md mb-2"
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
