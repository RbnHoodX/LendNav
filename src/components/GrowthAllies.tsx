import RightImage from "../assets/Lightbox_Sign_Mockup.png";
import Allies from "../assets/allies.png";
import Curve from "../assets/curve.png";
import Curve2 from "../assets/curve2.png";

const GrowthAllies = () => {
  return (
    <section id="about" className="md:py-8 mb-8">
      <div className="container space-y-3">
        {/* First Row: Two columns */}
        <div className="flex lg:flex-row flex-wrap gap-2 items-center justify-center">
          {/* Left Card */}
          <div className="relative bg-[#191919] p-8 rounded-2xl text-white max-w-[500px] max-h-[500px] ">
            <img
              src={Curve}
              alt="Logo"
              className="absolute w-full right-0 bottom-0 z-0"
            />
            <div className="relative z-10">
              <div className="flex items-center text-center gap-2 mb-2">
                <img
                  src={Allies}
                  alt="Nav Commercial"
                  className="md:w-14 md:h-14 w-10 h-10 object-cover"
                />
                <h2 className="md:text-5xl sm:text-3xl text-xl font-medium mb-2">
                  Growth Allies
                </h2>
              </div>
              <h2 className="text-lendnow-300 md:text-4xl sm:text-xl text-lh font-medium lg:text-3xl ">
                Fueling dreams, together
              </h2>
              <p className="mt-4 md:text-lg text-sm text-center">
                We Partner with:
              </p>
              <ul className="grid grid-cols-2 md:w-full w-full mx-auto  md:mb-8 mb-2">
                {[
                  "Accountants",
                  "Bookkeepers",
                  "Advisors",
                  "Consultants",
                  "Bankers",
                  "Tax-Strategists",
                ].map((item, index) => (
                  <li key={index} className="flex items-center mt-4">
                    <svg
                      className="md:h-6 md:w-6 min-w-4 h-4 text-black rounded-full bg-[#FF9494] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    <span className="md:text-lg text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-200 italic md:text-md sm:text-sm text-xs font-extralight mb-6 text-center">
                Clients have needs. We have solutions.
                <br /> At LendNav, we help you deliver more for your clients.
              </p>
              <div className="flex items-center justify-center mb-4">
                <button className="bg-lendnow-gradient hover:bg-lendnow-600 md:text-md text-sm text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:h-full lg:w-auto md:max-w-[500px] max-w-[410px]">
            <img
              src={RightImage}
              alt="LendNav Lightbox Sign"
              className="rounded-xl shadow-lg md:max-w-[500px]"
            />
          </div>
        </div>

        {/* Second Row: Full width */}
        <div className="relative w-full rounded-lg mx-auto bg-[#FF9494] p-8">
          <img
            src={Curve2}
            alt="Logo"
            className="absolute h-full right-0 bottom-0 z-0"
          />
          <div className="relative z-10">
            <div className="inline-flex bg-white px-2 py-1 rounded-sm text-sm text-lendnow-400 mb-6">
              <span>Why LendNav is Different</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              We’re not just consultants-We’re listeners.
            </h2>
            <ul className="space-y-4 text-left max-w-xl mb-8">
              {[
                "Strategies designed to maximize your return on investment",
                "Funding is just the start—we stay in your corner",
                "A partner that talks like a person—not a policy",
                "Go beyond the business and build an investment property portfolio",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-4 min-w-4 text-lendnow-300 bg-white rounded-full mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="md:text-md text-md font-medium text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center bg-white text-black px-4 py-2 rounded-sm text-sm transition-colors">
              Contact Us
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAllies;
