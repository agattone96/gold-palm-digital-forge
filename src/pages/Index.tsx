import React, { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

/* Lazy-load below-the-fold sections to cut initial bundle */
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));

/* Minimal skeleton for Suspense fallbacks */
function SectionSkeleton({ title }: { title: string }) {
  return (
    <section aria-busy="true" className="py-16">
      <div className="container mx-auto px-4">
        <div className="h-8 w-48 bg-muted/60 rounded mb-6 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-card shadow-card p-6 animate-pulse">
              <div className="h-5 w-32 bg-muted/70 rounded mb-3" />
              <div className="h-4 w-full bg-muted/60 rounded mb-2" />
              <div className="h-4 w-5/6 bg-muted/60 rounded" />
            </div>
          ))}
        </div>
        <span className="sr-only">{title} loading</span>
      </div>
    </section>
  );
}

/* Simple error boundary so a broken section doesn't nuke the page */
class SectionErrorBoundary extends React.Component<
  { children: React.ReactNode; label: string },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <section role="status" aria-live="polite" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-2">{this.props.label}</h2>
            <p className="text-muted-foreground">
              Something went sideways loading this section. Try refreshing.
            </p>
          </div>
        </section>
      );
    }
    return this.props.children as JSX.Element;
  }
}

/* LocalBusiness JSON-LD using your verified details */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gold Palm Solutions",
  url: "https://www.goldpalmsolutions.com/",
  telephone: "+1-727-621-4041",
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "05:00",
      closes: "22:00"
    }
  ],
  areaServed: [
    "Sarasota",
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
  },
  potentialAction: [
    {
      "@type": "ContactAction",
      target: "tel:+17276214041"
    },
    {
      "@type": "EmailAction",
      target: "mailto:info@goldpalmsolutions.com"
    }
  ]
};

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

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // es
