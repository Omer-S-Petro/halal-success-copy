import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Gift } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Complete 200+ page digital book",
    "90-day structured action plan",
    "Islamic success principles guide",
    "Daily reflection templates",
    "Goal-setting worksheets",
    "Halal business strategies",
    "Spiritual growth practices",
    "Success mindset exercises",
    "Prayer integration techniques",
    "Life balance framework"
  ];

  const bonuses = [
    "Audio version of the complete book ($29 value)",
    "Weekly reflection journal templates ($19 value)",
    "Islamic entrepreneur case studies ($25 value)",
    "Halal investment guide ($35 value)"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30">
          Limited Time Offer
        </Badge>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Transform Your Life for Less Than a Dinner Out
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Invest in your success and spiritual growth with a framework that has helped thousands 
          of Muslims achieve their dreams while strengthening their faith.
        </p>

        <Card className="p-8 sm:p-12 shadow-elegant bg-gradient-card border-primary/20 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl text-muted-foreground line-through">$197</span>
              <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-1">
                83% OFF
              </Badge>
            </div>
            <div className="text-6xl font-bold text-primary mb-2">$47</div>
            <p className="text-muted-foreground">One-time payment • Instant access • No subscriptions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What You Get:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-secondary" />
                Free Bonuses ($108 value):
              </h3>
              <ul className="space-y-3">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="hero" size="lg" className="w-full text-xl py-6">
              Get Instant Access - $47
            </Button>
            <Button variant="accent" size="lg" className="w-full">
              Try Risk-Free with 30-Day Money-Back Guarantee
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>All bonuses included</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              🕐 Special Launch Price Ends Soon
            </h3>
            <p className="text-muted-foreground">
              This introductory price is only available for the first 1,000 readers. 
              After that, the price goes up to the regular $197. Don't miss out on this opportunity 
              to transform your life at an incredible value.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;