import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <div className="py-20 text-center border-b border-primary-foreground/20">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            Your Journey Starts Now
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Join thousands of Muslims who have found their path to authentic success. 
            The Faith-First Framework is waiting for you.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            Get Your Copy Now - $47
          </Button>
          <p className="text-sm text-primary-foreground/60 mt-4">
            30-day money-back guarantee • Instant digital download
          </p>
        </div>

        {/* Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Faith-First Framework</h3>
              <p className="text-primary-foreground/80 mb-4">
                Empowering ambitious Muslims to achieve success without compromising their faith. 
                Built on Quranic wisdom and Prophetic guidance.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-secondary" />
                <span>Made with love for the Ummah</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#overview" className="hover:text-secondary transition-colors">Book Overview</a></li>
                <li><a href="#testimonials" className="hover:text-secondary transition-colors">Success Stories</a></li>
                <li><a href="#pricing" className="hover:text-secondary transition-colors">Get the Book</a></li>
                <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact & Support</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@faithfirstframework.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Faith-First Framework. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60 mt-4 sm:mt-0">
              <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#refund" className="hover:text-secondary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;