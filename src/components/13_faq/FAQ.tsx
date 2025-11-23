import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/data/faq_data";

export default function FAQ() {
  return (
    <div
      id="FAQ"
      className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left py-6 text-lg font-medium hover:text-purple-600 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="py-4 text-gray-600 leading-relaxed text-lg">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <a href="https://app.websitetrafficsmmpanel.com">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
