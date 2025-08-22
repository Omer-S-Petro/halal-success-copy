import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rahman",
      role: "Tech Entrepreneur, London",
      content: "This framework transformed how I approach business. I've built a successful startup while maintaining my Islamic principles. The 90-day plan is pure gold.",
      rating: 5
    },
    {
      name: "Fatima Hassan",
      role: "Executive Coach, Dubai",
      content: "Finally, a success guide that speaks to my soul as a Muslim woman. The balance between ambition and spirituality is exactly what I needed in my coaching practice.",
      rating: 5
    },
    {
      name: "Omar Malik",
      role: "Investment Banker, New York",
      content: "I was struggling with ethical dilemmas in finance. This book showed me how to succeed in Wall Street while staying true to halal principles. Life-changing.",
      rating: 5
    },
    {
      name: "Aisha Abdullahi",
      role: "Medical Doctor, Toronto",
      content: "The spiritual practices combined with practical goal-setting helped me excel in my residency while growing closer to Allah. Alhamdulillah for this guidance.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Real Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Lives Across the <span className="text-primary">Ummah</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of Muslims who have found their path to authentic success through the Faith-First Framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-elegant bg-gradient-card hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join over 5,000+ Muslims who have transformed their lives</p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;