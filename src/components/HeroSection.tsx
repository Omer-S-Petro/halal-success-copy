import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Islamic geometric pattern background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30">
            ✨ Transform Your Life in 90 Days
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            The <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Faith-First</span> Framework
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            90 Days to Halal Success and Spiritual Peace
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover how to build lasting success while staying true to your Islamic values. 
            A comprehensive guide for ambitious Muslims seeking both worldly achievement and spiritual fulfillment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Your Copy Now - $47
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Preview Sample Chapter
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>90-Day Action Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Islamic Principles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Practical Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Real Success Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;