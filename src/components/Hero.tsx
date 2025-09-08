import { Phone, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tree-service.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
              Making Your Property
              <span className="block text-primary-glow">Safer & More Beautiful</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Premium tree service, landscaping, and property solutions in Sarasota, Bradenton & Tampa Bay. 
              Professional expertise you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-4 font-semibold"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-smooth text-lg px-8 py-4 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                (727) 621-4041
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-primary-glow" />
                </div>
                <p className="text-white font-semibold">Fully Insured</p>
                <p className="text-white/80 text-sm">Licensed & Bonded</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary-glow" />
                </div>
                <p className="text-white font-semibold">Expert Team</p>
                <p className="text-white/80 text-sm">Certified Arborists</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary-glow" />
                </div>
                <p className="text-white font-semibold">500+ Clients</p>
                <p className="text-white/80 text-sm">Satisfied Customers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary-glow">24/7</span>
                </div>
                <p className="text-white font-semibold">Emergency</p>
                <p className="text-white/80 text-sm">Storm Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;