import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import NavSurgeImage from "../assets/nav_surg.png";
import NavFlexImage from "../assets/nav_flex.png";
import NavTermImage from "../assets/nav_term.png";
import NavEquipImage from "../assets/nav_equip.png";
import NavSwipeImage from "../assets/nav_swipe.png";
import LogoBack from "../assets/Logo_back_bright.png";
import LogoBottom from "../assets/Logo_bottom.png";

const solutionsData = [
  {
    id: 1,
    title: "Nav Surge",
    description: "Instant working capital, zero hassle",
    features: [
      "Fast 24–48 hour funding",
      "Minimal paperwork required",
      "Boost cash flow instantly",
    ],
    idealFor: "Ideal for: urgent expenses or cash flow gaps",
    image: NavSurgeImage,
  },
  {
    id: 2,
    title: "Nav Flex",
    description: "Revolving line of credit, in your back pocket",
    features: [
      "Draw what you need, when you need it",
      "No prepayment penalties — ever",
      "Simple monthly payments",
    ],
    idealFor: "Ideal for: inventory purchases, and surprise expenses",
    image: NavFlexImage,
  },
  {
    id: 3,
    title: "Nav Term",
    description: "Big-picture financing, small monthly payments",
    features: [
      "Bank-beating rates",
      "10-year fixed terms",
      "Predictable monthly payments",
    ],
    idealFor: "Ideal for: expansion, large projects, and consolidation",
    image: NavTermImage,
  },
  {
    id: 4,
    title: "Nav Equip",
    description: "Modern equipment, smarter financing",
    features: [
      "Own instead of rent",
      "Flexible multi-year terms",
      "Affordable monthly payments",
    ],
    idealFor: "Ideal for: construction and machinery upgrades",
    image: NavEquipImage,
  },
  {
    id: 5,
    title: "Nav Swipe",
    description: "Payment solutions for your industry, your way",
    features: [
      "Lower credit card processing fees",
      "POS system & terminal upgrades",
      "Chargeback protection and fraud control",
    ],
    idealFor: "Ideal for: retail, restaurants, and service providers",
    image: NavSwipeImage,
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="relative md:p-8 p-4 md:py-24 bg-[#FF9494] m-8 rounded-lg"
    >
      <img
        src={LogoBack}
        alt="Logo"
        className="absolute w-[400px] top-[5vw] left-[-8px] z-0"
      />
      <img
        src={LogoBottom}
        alt="Logo"
        className="absolute w-[200px] bottom-[0px] right-0 z-0"
      />
      <div className="relative text-[#191919] px-16">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="text-center">
            <h2 className="md:text-3xl text-2xl md:text-4xl font-medium mb-4">
              Business financing solutions
            </h2>
          </div>
          <p className="text-md md:text-center text-gray-800 md:px-16">
            Discover our suite of LendNav products - specialized alternative
            lending solutions designed for businesses and individuals who don't
            fit traditional financing models
          </p>
        </div>

        <div className="w-full flex flex-wrap gap-x-4 gap-y-4 justify-center">
          {solutionsData.map((solution, index) => (
            <Card
              key={solution.id}
              className={`shadow-sm w-[400px] h-[400px] hover:shadow-md transition-shadow flex flex-col justify-between
              `}
            >
              <div className="px-6 pt-8 mb-4">
                <div className="flex items-center gap-2 mb-6">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-12 h-12 object-cover rounded-sm"
                  />
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                <p className="text-[14px] text-gray-800 font-medium">
                  {solution.description}
                </p>
              </div>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="min-w-4 h-4 text-white rounded-full bg-[#FF9494] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="border-l-[3px] italic text-xs leading-6 font-semibold pl-2 border-[#FF9494] text-gray-600">
                  {solution.idealFor}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-2/3 mx-auto bg-[#191919] hover:bg-[#292929]">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
