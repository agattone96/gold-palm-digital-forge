import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from "@/lib/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-3xl font-bold text-primary-foreground">🌴</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-foreground">{COMPANY_NAME}</h2>
            <p className="text-sm text-muted-foreground">Premium Tree & Landscape Services</p>
          </div>
        </div>

        <h1 className="mb-6 text-8xl font-bold text-primary animate-fade-in">404</h1>
        <h2 className="mb-4 text-3xl font-bold font-serif text-foreground">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
          The page you're looking for seems to have gotten lost in the trees. 
          Don't worry, we'll help you find your way back!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-smooth"
          >
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="hover-glow"
          >
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="w-5 h-5 mr-2" />
              Call {FORMATTED_PHONE_NUMBER}
            </a>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card rounded-xl shadow-card">
          <p className="text-muted-foreground">
            Need immediate assistance? We're here to help with your tree service, 
            landscaping, or property needs throughout the Tampa Bay area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
