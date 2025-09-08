import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";

/* Stable LocalBusiness JSON-LD (client-injected to avoid SSR/hydration issues) */
const phoneInternational = `+1-${PHONE_NUMBER.slice(0,3)}-${PHONE_NUMBER.slice(3,6)}-${PHONE_NUMBER.slice(6)}`;
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  url: "https://www.goldpalmsolutions.com/",
  telephone: phoneInternational,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarasota",
    addressRegion: "FL",
    postalCode: "34243",
    addressCountry: "US"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "05:00",
      closes: "22:00"
    }
  ],
  areaServed: [
    "Sarasota","Bradenton","Palmetto","Venice","Lakewood Ranch",
    "Longboat Key","Siesta Key","Parrish","Port Charlotte","Nokomis","Englewood"
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61569589914650",
    "https://www.yelp.com/biz/gold-palm-solutions-sarasota-2"
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stump Grinding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Limb Reductions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Junk Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver & Gravel Driveways" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Clearing & Grading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Storm Response" } }
    ]
  }
};

function JsonLdHead() {
  useEffect(() => {
    const id = "org-jsonld";
    if (document.getElementById(id)) return; // don't duplicate on SPA navigations
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = id;
    s.text = JSON.stringify(orgJsonLd);
    document.head.appendChild(s);
  }, []);
  return null;
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 bg-foreground text-background px-3 py-2 rounded-card shadow-card"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* inject JSON-LD on client only */}
      <JsonLdHead />
    </div>
  );
};

export default Index;
