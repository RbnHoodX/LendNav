import { useState } from "react";

const faqs = [
  {
    question: "Do I need perfect credit to apply?",
    answer:
      "No, you do not need perfect credit. You can qualify even with credit in the 500s or lower if your business bank statements are strong.",
  },
  {
    question: "How fast can I get approved and funded?",
    answer:
      "Our funding timelines vary by product, with some options available as quickly as the same business day after approval. Most funding is completed within 1-3 business days once all documentation is received.",
  },
  {
    question: "Can I get help figuring out the best option?",
    answer:
      "Typically, we require 3-6 months of business bank statements, basic business information, and personal identification. Depending on the funding amount and type, we may request additional documentation.",
  },
  {
    question: "Is there a minimum loan amount?",
    answer:
      "Yes, we do consider personal credit as part of our evaluation process, but we offer solutions for various credit profiles. Some products have minimum credit score requirements while others are more flexible.",
  },
  {
    question: "What makes LendNav different from traditional lenders?",
    answer:
      "Absolutely! We specialize in finding funding solutions for businesses that may not fit traditional bank criteria. Our alternative funding options often work for businesses that have been declined elsewhere.",
  },
  {
    question:
      "Does it cost me more to work with you, rather than going to a bank directly?",
    answer:
      "This depends on the specific funding product. Some of our solutions offer discounts for early repayment, while others have a fixed cost structure. Your funding specialist will clearly explain the terms before you sign any agreement.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col gap-8 items-start justify-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center max-w-md">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 text-base mb-6">
              Everything you need to know about how we work and how we can help
              your business.
            </p>
            <button className="w-fit px-4 py-2 bg-[#FF9494] text-white text-sm rounded-md hover:bg-lendnow-400 transition">
              Ask another question
            </button>
          </div>

          {/* Right Section - Accordion */}
          <div className="flex flex-col space-y-4 max-w-2xl w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#F6F3F3] rounded-lg p-5 cursor-pointer shadow-sm transition"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <div
                      className={`min-w-6 h-6 flex items-center justify-center rounded-full text-white text-lg font-bold leading-none ${
                        isOpen ? "bg-black" : "bg-[#FF9494]"
                      }`}
                    >
                      <span className="pb-1">{isOpen ? "-" : "+"}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="mt-3 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
