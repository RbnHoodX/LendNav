
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the requirements to qualify for funding?",
    answer:
      "Generally, we look for businesses with at least 6 months of operating history and $10,000 in monthly revenue. Credit requirements vary by product, with some options available for businesses with less-than-perfect credit scores.",
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
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-lendnow-100 text-lendnow-600 rounded-full text-sm font-medium mb-4">
            Have Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our funding solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
