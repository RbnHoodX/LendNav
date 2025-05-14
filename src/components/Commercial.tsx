import BuildingImage from "../assets/building.png";
import NavCom from "../assets/nav_com.png";

const Commercial = () => {
  return (
    <section className="py-4 md:py-4 bg-[#2f2f2f] text-white relative overflow-hidden m-16 rounded-lg">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Image Section */}
          <div className="relative md:w-1/2 mb-8 md:mb-0">
            <img
              src={BuildingImage}
              alt="Commercial Building"
              className="w-[32] h-[32]"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2f2f2f] to-transparent pointer-events-none" />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={NavCom}
                alt="Nav Commercial"
                className="w-8 h-8 lg:w-12 lg:h-12 object-cover"
              />
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Nav <span className="text-lendnow-300">Commercial</span>
              </h2>
            </div>
            <h2 className="text-md md:text-xl lg:text-3xl mt-2">
              Own your future, literally
            </h2>

            <div className="space-y-4 mt-2">
              <p className="text-gray-300 text-sm">
                From storefronts to investment properties, our commercial loan
                options make ownership accessible and strategic
              </p>

              <ul className="space-y-3">
                {[
                  <div>
                    Owner-occupied purchases <b>w/ no tax returns</b>
                  </div>,
                  <div>
                    <b>No income check</b> for investment property transactions
                  </div>,
                  <div>
                    <b>Refinance</b> solutions: cash-out, lower rate, exit a
                    balloon
                  </div>,
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-lendnow-400 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center mt-4 lg:pt-8">
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
