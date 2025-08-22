import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Heart, Star } from "lucide-react";
import successPortrait from "@/assets/success-portrait.jpg";

const BookOverview = () => {
  const benefits = [
    {
      icon: Target,
      title: "Clear 90-Day Roadmap",
      description: "Step-by-step daily actions aligned with Islamic principles to build sustainable success habits."
    },
    {
      icon: Heart,
      title: "Faith-Centered Approach",
      description: "Every strategy is rooted in Quranic wisdom and Prophetic guidance for authentic spiritual growth."
    },
    {
      icon: BookOpen,
      title: "Practical Implementation",
      description: "Real-world case studies and actionable templates you can apply to your personal and professional life."
    },
    {
      icon: Star,
      title: "Holistic Success",
      description: "Balance material achievement with spiritual fulfillment, creating lasting peace and prosperity."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            What You'll Discover
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Journey to <span className="text-primary">Halal Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just another self-help book. It's a comprehensive framework that honors your faith 
            while empowering you to achieve your highest aspirations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-0 shadow-elegant bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src={successPortrait} 
              alt="Professional Muslim achieving success"
              className="relative z-10 w-full rounded-2xl shadow-elegant"
            />
          </div>
        </div>

        <Card className="p-8 sm:p-12 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              "Success without spirituality is empty. Faith without action is incomplete."
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              This book bridges that gap, showing you how to achieve your goals while 
              deepening your connection with Allah and living according to Islamic values.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">📚 200+ pages of wisdom</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">🎯 Daily action plans</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">📖 Islamic references</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✅ Success templates</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BookOverview;