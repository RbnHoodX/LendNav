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
    image: NavSwipeImage,
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="relative p-8 md:py-24 bg-[#FF9494] m-4 rounded-lg"
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
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Business financing solutions
          </h2>
          <p className="text-md text-gray-800 w-[65vw] mx-auto">
            Discover our suite of LendNav products - specialized alternative
            lending solutions designed for businesses and individuals who don't
            fit traditional financing models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {solutionsData.slice(0, 3).map((solution) => (
            <Card
              key={solution.id}
              className="shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-8 h-8 object-cover rounded-sm"
                  />
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  {solution.description}
                </p>
              </div>
              <CardContent className="pt-1">
                <ul className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-white rounded-full bg-[#FF9494] mr-2 mt-0.5"
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
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {solutionsData.slice(3).map((solution) => (
              <Card
                key={solution.id}
                className="shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-8 h-8 object-cover rounded-sm"
                    />
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    {solution.description}
                  </p>
                </div>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex text-sm items-start">
                        <svg
                          className="w-5 h-5 text-white rounded-full bg-[#FF9494] mr-2 mt-0.5"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
      </div>
    </section>
  );
};

export default Solutions;
