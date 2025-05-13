import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqs = [
  {
    question: "What are the requirements to qualify for funding?",
    answer:
      "No, you do not need perfect credit. You can qualify even with credit in the 500s or lower if your business bank statements are strong.",
  },
  {
    question: "How quickly can I receive funding?",
    answer:
      "Our funding timelines vary by product, with some options available as quickly as the same business day after approval. Most funding is completed within 1-3 business days once all documentation is received.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Typically, we require 3-6 months of business bank statements, basic business information, and personal identification. Depending on the funding amount and type, we may request additional documentation.",
  },
  {
    question: "Do you check personal credit scores?",
    answer:
      "Yes, we do consider personal credit as part of our evaluation process, but we offer solutions for various credit profiles. Some products have minimum credit score requirements while others are more flexible.",
  },
  {
    question: "Can I apply if I've been declined by a bank?",
    answer:
      "Absolutely! We specialize in finding funding solutions for businesses that may not fit traditional bank criteria. Our alternative funding options often work for businesses that have been declined elsewhere.",
  },
  {
    question: "Are there any prepayment penalties?",
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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-3xl mb-6">
              Frequently asked questions
            </h2>
            <button className="mt-4 px-4 py-2 bg-[#FF9494] text-sm text-white rounded-sm hover:bg-lendnow-400 transition">
              Ask another question
            </button>
          </div>

          {/* Right Section - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 cursor-pointer transition"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-md">{faq.question}</h3>
                    {isOpen ? (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold leading-none">
                        <span className="pb-1">-</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF9494] text-white text-lg font-bold leading-none">
                        <span className="pb-1">+</span>
                      </div>
                    )}
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
