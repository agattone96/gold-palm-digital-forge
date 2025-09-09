import ServicePage from "@/components/ServicePage";

const ConcreteWork = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Work Services",
    "description": "Professional concrete installation and repair services in Sarasota, Bradenton, and surrounding areas. Driveways, walkways, patios, and slabs.",
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
    "serviceType": "Concrete Work",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for concrete work services"
    }
  };

  const faq = [
    {
      q: "How long does concrete take to cure in Florida?",
      a: "In Florida's climate, concrete typically reaches initial set in 24-48 hours and full strength in 28 days. We recommend waiting at least 7 days before heavy use of new concrete surfaces."
    },
    {
      q: "What's the difference between concrete and cement?",
      a: "Cement is an ingredient in concrete. Concrete is a mixture of cement, sand, gravel, and water. We use high-quality concrete mixes designed for Florida's climate and soil conditions."
    },
    {
      q: "Do you provide concrete repair services?",
      a: "Yes, we repair cracked, settled, or damaged concrete surfaces. We also offer resurfacing options to restore the appearance of existing concrete without full replacement."
    },
    {
      q: "What permits are needed for concrete work in Sarasota?",
      a: "Most concrete driveways and walkways don't require permits, but larger projects like patios or structural work may. We help determine permit requirements and assist with applications."
    }
  ];

  return (
    <ServicePage
      title="Concrete Work Sarasota | Driveways & Patios | Gold Palm Solutions"
      blurb="Professional concrete installation and repair in Sarasota, Bradenton & Tampa Bay. Quality driveways, walkways, patios, and slabs with proper curing and finishing."
      bullets={[
        "Concrete driveways and parking areas",
        "Walkways, sidewalks, and pathways",
        "Patios and outdoor entertainment areas",
        "Foundation slabs and structural concrete",
        "Concrete repair and resurfacing services",
        "Proper site preparation and grading",
        "Quality finishing and curing processes",
        "Permit assistance and code compliance"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/concrete-work"
      schema={schema}
    />
  );
};

export default ConcreteWork;