import ServicePage from "@/components/ServicePage";

const LandClearing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Land Clearing Services",
    "description": "Professional land clearing and site preparation services in Sarasota, Bradenton, and surrounding areas. Brush removal, lot clearing, and site development.",
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
    "serviceType": "Land Clearing",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for land clearing services"
    }
  };

  const faq = [
    {
      q: "Do I need permits for land clearing in Sarasota County?",
      a: "Many land clearing projects require permits, especially those involving wetlands, protected trees, or areas over certain sizes. We help navigate permit requirements and can assist with applications."
    },
    {
      q: "What equipment do you use for land clearing?",
      a: "We use specialized equipment including bulldozers, excavators, brush hogs, and forestry mulchers. Equipment selection depends on terrain, vegetation type, and project requirements."
    },
    {
      q: "Can you clear land while preserving specific trees?",
      a: "Yes, we specialize in selective clearing that preserves desirable trees and vegetation. We work with you to identify trees to save and plan clearing around them."
    },
    {
      q: "What happens to the cleared vegetation and debris?",
      a: "Cleared material can be chipped for mulch, hauled away, or burned on-site where permitted. We discuss disposal options during the planning phase to find the most cost-effective solution."
    }
  ];

  return (
    <ServicePage
      title="Land Clearing Sarasota | Site Preparation | Gold Palm Solutions"
      blurb="Professional land clearing services in Sarasota, Bradenton & Tampa Bay. Brush removal, lot clearing, and site preparation with proper permits and environmental consideration."
      bullets={[
        "Complete lot and acreage clearing services",
        "Selective clearing to preserve desired trees",
        "Brush and undergrowth removal",
        "Stump grinding and root removal",
        "Debris disposal and site cleanup",
        "Permit assistance and environmental compliance",
        "Specialized equipment for all terrain types",
        "Site preparation for construction projects"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/land-clearing"
      schema={schema}
    />
  );
};

export default LandClearing;