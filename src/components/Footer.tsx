import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
} from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Tree Removal",
    "Tree Trimming", 
    "Landscaping Design",
    "Concrete Services",
    "Junk Removal",
    "Emergency Services"
  ];

  const serviceAreas = [
    "Bradenton",
    "Palmetto", 
    "Venice",
    "Lakewood Ranch",
    "Longboat Key",
    "Siesta Key",
    "Parrish",
    "Port Charlotte",
    "Nokomis",
    "Englewood"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">🌴</span>
              </div>
              <div>
                  <h3 className="text-xl font-bold font-serif">{COMPANY_NAME}</h3>
                <p className="text-sm opacity-80">Premium Property Services</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed">
              Making properties safer and more beautiful throughout Sarasota, Bradenton & surrounding areas. 
              Professional tree service, landscaping, and property solutions you can trust.
            </p>
            
            <div className="space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center space-x-3 text-primary-glow hover:opacity-80 transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{FORMATTED_PHONE_NUMBER}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  <span>{COMPANY_EMAIL}</span>
                </a>
                <div className="flex items-center space-x-3 opacity-90">
                  <MapPin className="w-5 h-5" />
                  <span>{COMPANY_ADDRESS}</span>
                </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="opacity-90">{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a 
                href="#contact" 
                className="text-primary-glow hover:opacity-80 transition-smooth font-medium"
              >
                See all areas →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-primary-glow transition-smooth">
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} {COMPANY_NAME}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-smooth">
                Terms of Service
              </a>
              <span className="opacity-80">
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
