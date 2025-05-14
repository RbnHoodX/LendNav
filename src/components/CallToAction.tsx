import { Button } from "@/components/ui/button";
import LogoBack from "../assets/Logo_funded.png";

const CallToAction = () => {
  return (
    <section className="relative py-10 bg-[#FF9494] text-[#472121] md:mx-16 mx-8 rounded-lg translate-y-[50px]">
      <img
        src={LogoBack}
        alt="Logo"
        className="absolute rounded-lg h-full bottom-0 right-0 -z-10"
      />
      <div className="relative container mx-auto md:px-16 md:py-16 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section: Text */}
          <div className="text-center md:text-left md:mb-none mb-8">
            <h2 className="text-2xl md:text-5xl mb-2">Let's get you funded</h2>
            <p className="text-sm md:text-md opacity-90">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
