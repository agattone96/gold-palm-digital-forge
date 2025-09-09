import ServicePage from "@/components/ServicePage";

const Grading = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Land Grading Services",
    "description": "Professional land grading and site preparation services in Sarasota, Bradenton, and surrounding areas. Proper drainage, leveling, and site development.",
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
    "serviceType": "Land Grading",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for land grading services"
    }
  };

  const faq = [
    {
      q: "Why is proper grading important in Florida?",
      a: "Proper grading is crucial in Florida to manage heavy rainfall and prevent flooding. Good grading directs water away from structures and prevents erosion and standing water issues."
    },
    {
      q: "What's included in your grading services?",
      a: "Our grading services include site survey, soil preparation, rough grading, fine grading, drainage installation, and final compaction. We ensure proper slopes and water management."
    },
    {
      q: "Can you fix drainage problems with grading?",
      a: "Yes, regrading is often the most effective solution for drainage problems. We can redirect water flow, eliminate low spots, and create proper drainage patterns around your property."
    },
    {
      q: "Do you provide soil and fill material?",
      a: "Yes, we can provide various types of fill material including clean fill dirt, sand, and topsoil. We source quality materials appropriate for your specific project needs."
    }
  ];

  return (
    <ServicePage
      title="Land Grading Sarasota | Site Preparation | Gold Palm Solutions"
      blurb="Professional land grading services in Sarasota, Bradenton & Tampa Bay. Proper drainage, site leveling, and preparation for construction with quality materials and expert execution."
      bullets={[
        "Precision grading for proper drainage",
        "Site preparation for construction projects",
        "Drainage problem correction and prevention",
        "Rough and finish grading services",
        "Quality fill dirt and soil materials",
        "Erosion control and slope stabilization",
        "Driveway and access road preparation",
        "Compliance with local grading codes"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/grading"
      schema={schema}
    />
  );
};

export default Grading;