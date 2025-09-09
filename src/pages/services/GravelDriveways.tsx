import ServicePage from "@/components/ServicePage";

const GravelDriveways = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gravel Driveway Installation",
    "description": "Professional gravel driveway installation and maintenance in Sarasota, Bradenton, and surrounding areas. Cost-effective and durable driveway solutions.",
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
    "serviceType": "Gravel Driveway Installation",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for gravel driveway installation"
    }
  };

  const faq = [
    {
      q: "What type of gravel is best for Florida driveways?",
      a: "We recommend crushed limestone or shell rock for Florida driveways. These materials compact well, provide good drainage, and are readily available locally, making them cost-effective choices."
    },
    {
      q: "How often do gravel driveways need maintenance?",
      a: "Gravel driveways typically need fresh gravel added and grading every 1-2 years, depending on traffic and weather. We offer maintenance programs to keep your driveway in optimal condition."
    },
    {
      q: "Can you install gravel driveways in wet areas?",
      a: "Yes, gravel driveways are excellent for areas with drainage issues. We install proper base materials and drainage systems to prevent washout and maintain stability in wet conditions."
    },
    {
      q: "What's the cost difference between gravel and paved driveways?",
      a: "Gravel driveways cost 60-80% less than paved alternatives initially. While they require more maintenance, they remain the most economical long-term solution for many properties."
    }
  ];

  return (
    <ServicePage
      title="Gravel Driveways Sarasota | Professional Installation | Gold Palm Solutions"
      blurb="Professional gravel driveway installation in Sarasota, Bradenton & Tampa Bay. Cost-effective, durable solutions with proper drainage and base preparation."
      bullets={[
        "Quality gravel selection and installation",
        "Proper base preparation and grading",
        "Drainage systems to prevent washout",
        "Compaction for long-lasting stability",
        "Gravel driveway maintenance and repair",
        "Cost-effective alternative to paving",
        "Environmentally friendly permeable surface",
        "Custom width and design options"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/gravel-driveways"
      schema={schema}
    />
  );
};

export default GravelDriveways;