import ServicePage from "@/components/ServicePage";

const LawnMaintenance = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lawn Maintenance Services",
    "description": "Professional lawn maintenance and landscaping services in Sarasota, Bradenton, and surrounding areas. Regular mowing, edging, and property upkeep.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gold Palm Solutions",
      "telephone": "+1-727-621-4041",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sarasota",
        "addressRegion": "FL",
        "postalCode": "34243",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      "Sarasota", "Bradenton", "Palmetto", "Venice", "Lakewood Ranch",
      "Longboat Key", "Siesta Key", "Parrish", "Port Charlotte", "Nokomis", "Englewood"
    ],
    "serviceType": "Lawn Maintenance",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for lawn maintenance services"
    }
  };

  const faq = [
    {
      q: "How often should I have my lawn mowed in Florida?",
      a: "During growing season (spring through fall), most Florida lawns need mowing weekly. In winter, bi-weekly service is often sufficient. We adjust schedules based on grass type and growth patterns."
    },
    {
      q: "Do you provide fertilization and pest control?",
      a: "We focus on mowing, edging, and basic maintenance. For fertilization and pest control, we can recommend trusted local specialists who complement our services."
    },
    {
      q: "What's included in your lawn maintenance service?",
      a: "Our standard service includes mowing, edging, blowing walkways and driveways clean, and basic debris removal. We can customize packages based on your specific needs."
    },
    {
      q: "Do you maintain commercial properties?",
      a: "Yes, we provide lawn maintenance for both residential and commercial properties. We have experience with HOA communities, office complexes, and retail locations."
    }
  ];

  return (
    <ServicePage
      title="Lawn Maintenance Sarasota | Professional Lawn Care | Gold Palm Solutions"
      blurb="Reliable lawn maintenance services in Sarasota, Bradenton & Tampa Bay. Professional mowing, edging, and property upkeep to keep your landscape looking its best year-round."
      bullets={[
        "Weekly or bi-weekly mowing schedules available",
        "Precision edging around walkways and beds",
        "Leaf blowing and debris cleanup included",
        "Hedge trimming and shrub maintenance",
        "Seasonal cleanup and preparation services",
        "Commercial and residential properties",
        "Reliable scheduling with consistent crews",
        "Equipment maintenance and fuel included"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/lawn-maintenance"
      schema={schema}
    />
  );
};

export default LawnMaintenance;