
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const solutionsData = [
  {
    id: 1,
    title: "Fast Flex",
    description: "Quick access to short-term capital with flexible repayment options based on your business revenue.",
    features: [
      "Funding up to $500,000",
      "Same-day approval possible",
      "No fixed monthly payments",
      "Simple revenue-based repayment"
    ],
    color: "bg-lendnow-50"
  },
  {
    id: 2,
    title: "Term Pro",
    description: "Traditional term loans with competitive rates for established businesses looking for substantial funding.",
    features: [
      "Funding up to $2,000,000",
      "Terms from 1-5 years",
      "Fixed monthly payments",
      "Lower rates for qualified businesses"
    ],
    color: "bg-blue-50"
  },
  {
    id: 3,
    title: "Max Term",
    description: "Long-term financing solutions for major business investments with industry-leading terms.",
    features: [
      "Funding up to $5,000,000",
      "Extended terms available",
      "Custom payment schedules",
      "Competitive fixed rates"
    ],
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Line Extra",
    description: "Revolving credit line that gives you access to funds when you need them most.",
    features: [
      "Credit lines up to $250,000",
      "Draw funds as needed",
      "Only pay interest on what you use",
      "24/7 online access"
    ],
    color: "bg-lendnow-50"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business financing solutions</h2>
          <p className="text-lg text-gray-600">
            We offer a variety of funding options tailored to meet your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {solutionsData.map((solution) => (
            <Card key={solution.id} className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className={`${solution.color} p-6`}>
                <h3 className="text-xl font-bold">{solution.title}</h3>
                <p className="mt-2 text-gray-700">{solution.description}</p>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-lendnow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-lendnow-gradient hover:bg-lendnow-600">
                  Apply Now
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
