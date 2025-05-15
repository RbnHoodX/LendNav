import { Card, CardContent } from "@/components/ui/card";
import FundCard1 from "../assets/fund-card1.png";
import FundCard2 from "../assets/fund_card2.png";
import FundCard3 from "../assets/fund_card3.png";
import FundCard4 from "../assets/fund_card4.png";
import LogoBack from "../assets/Logo_process.png";

const processSteps = [
  {
    id: 1,
    title: "Apply in minutes",
    color: "bg-[#64C9FF]",
    image: FundCard1,
  },
  {
    id: 2,
    title: "Submit your recent bank statements",
    color: "bg-[#FEA14B]",
    image: FundCard2,
  },
  {
    id: 3,
    title: "Receive a customized funding proposal",
    color: "bg-[#C3EF7E]",
    image: FundCard3,
  },
  {
    id: 4,
    title: "Funds sent to your account",
    color: "bg-[#A48DF9]",
    image: FundCard4,
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-2 md:py-2 bg-[#101010]">
      <img src={LogoBack} alt="Logo" className="absolute w-[300px] z-0" />
      <div className="relative container mx-auto px-4 md:py-24 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
            Funding in four easy steps
          </h2>
          <p className="text-md text-gray-200">
            Fast, simple process. Designed to keep your focus on your business,
            not on paperwork
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {processSteps.map((step) => (
            <Card
              key={step.id}
              className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={
                      "text-black font-bold md:text-lg text-sm md:size-8 size-5 rounded-full flex items-center justify-center mr-3 " +
                      step.color
                    }
                  >
                    {step.id}
                  </div>
                  <h3 className="md:text-lg text-[12px] font-medium">
                    {step.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
