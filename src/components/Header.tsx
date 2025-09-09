import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { 
      label: "Services", 
      href: "#services",
      dropdown: [
        { label: "Tree Removal", href: "/services/tree-removal" },
        { label: "Stump Grinding", href: "/services/stump-grinding" },
        { label: "Limb Reductions", href: "/services/limb-reductions" },
        { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
        { label: "Junk Removal", href: "/services/junk-removal" },
        { label: "Concrete Work", href: "/services/concrete-work" },
        { label: "Paver Driveways", href: "/services/paver-driveways" },
        { label: "Gravel Driveways", href: "/services/gravel-driveways" },
        { label: "Land Clearing", href: "/services/land-clearing" },
        { label: "Grading", href: "/services/grading" }
      ]
    },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">🌴</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif text-foreground">
                {COMPANY_NAME}
              </h1>
              <p className="text-sm text-muted-foreground">Premium Tree & Landscape Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium flex items-center"
                >
                  {item.label}
                  {item.dropdown && <span className="ml-1">▾</span>}
                </a>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-smooth"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-smooth font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>{FORMATTED_PHONE_NUMBER}</span>
            </a>
            <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-smooth">
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center space-x-2 text-primary font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>{FORMATTED_PHONE_NUMBER}</span>
                </a>
                <Button variant="default" className="w-full bg-gradient-primary">
                  Free Estimate
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
