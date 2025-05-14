import Trucking from "../assets/trucking.png";
import Restaurants from "../assets/restaurants.png";
import Medical from "../assets/medical.png";
import Retail from "../assets/retail.png";
import Construction from "../assets/construction.png";
import RealEstate from "../assets/real_estate.png";

const industriesData = [
  {
    id: 1,
    title: "Trucking",
    description: "Keep wheels rolling and contracts fulfilled",
    image: Trucking,
  },
  {
    id: 2,
    title: "Restaurants",
    description: "Open additional locations, upgrade kitchen",
    image: Restaurants,
  },
  {
    id: 3,
    title: "Medical",
    description: "Expand practice, access new tech and equipment",
    image: Medical,
  },
  {
    id: 4,
    title: "Retail",
    description: "Boost inventory, rebrand, or scale",
    image: Retail,
  },
  {
    id: 5,
    title: "Construction",
    description: "Boost cash-flow, secure funding for overhead or bids",
    image: Construction,
  },
  {
    id: 6,
    title: "Real Estate",
    description: "Expand your team, enhance your marketing",
    image: RealEstate,
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funding across every industry
          </h2>
          <p className="text-lg text-gray-600">
            No matter what you build, sell, or create — we fund it. LendNav
            offers financing for businesses of all shapes and sizes.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <button className="bg-[#FF9494] hover:bg-lendnow-400 py-1 px-3 rounded-lg mx-auto text-white">
            Featured Industries
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="group overflow-hidden rounded-xl bg-white"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
