import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Gift, BookOpen, Shield } from "lucide-react";

const PricingSection = () => {
  const mainProduct = {
    title: "The Faith-First Framework",
    description: "Complete 200+ page digital book with 90-day action plan",
    format: "PDF + Audio Version",
    pages: "200+",
    value: 197
  };

  const bonuses = [
    {
      title: "Notion Productivity Template",
      description: "Complete Islamic productivity system with daily tracking, goal setting, and prayer reminders",
      format: "Notion Template",
      value: 49,
      features: ["Daily planning pages", "Goal tracking system", "Prayer time integration", "Habit tracker"]
    },
    {
      title: "Mini Du'a Collection",
      description: "Beautifully designed du'a book for success, guidance, and spiritual strength",
      format: "PDF + Audio",
      value: 29,
      features: ["40+ authentic du'as", "Arabic with transliteration", "Audio pronunciation", "Success-focused du'as"]
    }
  ];

  const mainFeatures = [
    "Complete 200+ page digital book (PDF format)",
    "Professional audio version (8+ hours)",
    "90-day structured action plan",
    "Daily reflection templates",
    "Goal-setting worksheets",
    "Islamic success principles guide",
    "Halal business strategies",
    "Spiritual growth practices",
    "Prayer integration techniques",
    "Life balance framework"
  ];

  const totalValue = mainProduct.value + bonuses.reduce((sum, bonus) => sum + bonus.value, 0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Complete Digital Package
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for <span className="text-primary">Halal Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Get the complete Faith-First Framework package with exclusive bonuses. 
            All digital products delivered instantly to your email.
          </p>
        </div>

        {/* Product Bundle */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Product */}
          <Card className="lg:col-span-2 p-8 shadow-elegant bg-gradient-card border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{mainProduct.title}</h3>
                <p className="text-muted-foreground mb-4">{mainProduct.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>📄 {mainProduct.format}</span>
                  <span>📖 {mainProduct.pages} pages</span>
                  <span className="font-semibold text-primary">${mainProduct.value} value</span>
                </div>
              </div>
            </div>
            
            <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Price Summary */}
          <Card className="p-8 shadow-elegant bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Complete Package</h3>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl text-muted-foreground line-through">${totalValue}</span>
                <Badge className="bg-secondary text-secondary-foreground">Save ${totalValue - 47}</Badge>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">$47</div>
              <p className="text-sm text-muted-foreground">One-time payment • Instant download</p>
            </div>

            <Button variant="hero" size="lg" className="w-full text-lg py-4 mb-4">
              Buy Now - $47
            </Button>
            
            <div className="space-y-2 text-xs text-muted-foreground text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" />
                <span>Instant digital delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-3 h-3" />
                <span>Secure payment via Stripe</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Bonus Products */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-6 shadow-elegant bg-gradient-card border-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Gift className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{bonus.title}</h4>
                    <Badge className="bg-secondary/20 text-secondary text-xs">BONUS</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{bonus.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>📋 {bonus.format}</span>
                    <span className="font-semibold text-secondary">${bonus.value} value</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {bonus.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        {/* Trust Signals */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🕐 Limited Time Launch Price
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the complete package at this special introductory price. 
              This offer is only available for the first 1,000 customers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <span className="font-semibold">30-Day Guarantee</span>
                <span className="text-muted-foreground">Full refund if not satisfied</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-primary" />
                <span className="font-semibold">Instant Access</span>
                <span className="text-muted-foreground">Download immediately after purchase</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="font-semibold">Secure Payment</span>
                <span className="text-muted-foreground">Protected by Stripe encryption</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;