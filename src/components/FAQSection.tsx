import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this book suitable for Muslims of all backgrounds?",
      answer: "Absolutely! The Faith-First Framework is designed for Muslims from all walks of life, whether you're a student, professional, entrepreneur, or someone seeking to realign your life with Islamic principles. The strategies are adaptable to different circumstances and cultural contexts while remaining rooted in universal Islamic teachings."
    },
    {
      question: "How is this different from other success books?",
      answer: "Unlike conventional success books that often conflict with Islamic values, this framework is built entirely on Quranic wisdom and Prophetic guidance. Every strategy, goal-setting technique, and success principle is verified against Islamic teachings, ensuring you can pursue your ambitions without compromising your faith."
    },
    {
      question: "What if I'm already successful but feeling spiritually empty?",
      answer: "This book is perfect for you! Many successful Muslims struggle with the feeling that their achievements are hollow because they lack spiritual fulfillment. The Faith-First Framework shows you how to infuse your existing success with deeper meaning and purpose through Islamic principles."
    },
    {
      question: "Can I implement this framework alongside my current responsibilities?",
      answer: "Yes! The 90-day plan is designed to integrate seamlessly with your existing schedule. Each daily action takes 15-30 minutes and can be adapted to your lifestyle. The framework actually helps you become more efficient and purposeful in all areas of life."
    },
    {
      question: "What format is the book available in?",
      answer: "You'll receive the complete book in PDF format for immediate download, plus bonus audio version. It's optimized for reading on any device - computer, tablet, or smartphone. You also get printable worksheets and templates."
    },
    {
      question: "Is there ongoing support after purchase?",
      answer: "While this is a self-study program, the book includes access to an exclusive online community of like-minded Muslims following the same framework. You'll also receive periodic email updates with additional tips and success stories."
    },
    {
      question: "What if the framework doesn't work for me?",
      answer: "We're so confident in the Faith-First Framework that we offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, simply email us within 30 days for a full refund, no questions asked."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many readers report feeling more aligned and purposeful within the first week. Significant changes in mindset typically occur within 30 days, and substantial life improvements are usually evident by day 60. Remember, lasting transformation takes time, which is why we've designed a 90-day journey."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Common Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to <span className="text-primary">Know</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about the Faith-First Framework 
            and how it can transform your life.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:support@faithfirstframework.com" 
            className="text-primary hover:text-primary-glow font-medium"
          >
            Contact us at support@faithfirstframework.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;