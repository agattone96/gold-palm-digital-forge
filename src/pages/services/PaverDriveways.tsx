import ServicePage from "@/components/ServicePage";

const PaverDriveways = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paver Driveway Installation",
    "description": "Professional paver driveway installation in Sarasota, Bradenton, and surrounding areas. Custom designs with quality materials and expert installation.",
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
    "serviceType": "Paver Installation",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for paver driveway installation"
    }
  };

  const faq = [
    {
      q: "How long do paver driveways last in Florida?",
      a: "Quality paver driveways can last 25-50 years with proper installation and maintenance. They're more durable than concrete in Florida's climate and can be easily repaired if individual pavers are damaged."
    },
    {
      q: "What's the cost difference between pavers and concrete?",
      a: "Paver driveways typically cost 20-30% more than concrete initially, but offer better long-term value due to durability, repairability, and increased property value."
    },
    {
      q: "Do paver driveways require special maintenance?",
      a: "Paver driveways need periodic cleaning and re-sanding of joints. We recommend professional cleaning and sealing every 2-3 years to maintain appearance and prevent weed growth."
    },
    {
      q: "Can you match existing pavers for repairs or additions?",
      a: "We work with major paver manufacturers and can often match existing pavers. For older installations, we keep detailed records and photos to help with future matching needs."
    }
  ];

  return (
    <ServicePage
      title="Paver Driveways Sarasota | Custom Installation | Gold Palm Solutions"
      blurb="Professional paver driveway installation in Sarasota, Bradenton & Tampa Bay. Custom designs, quality materials, and expert installation for lasting beauty and durability."
      bullets={[
        "Custom paver driveway design and installation",
        "Wide selection of colors, patterns, and materials",
        "Proper base preparation and drainage systems",
        "Professional edge restraints and joint sanding",
        "Paver repair and restoration services",
        "Sealing and maintenance programs available",
        "Increased property value and curb appeal",
        "25+ year durability with proper installation"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/paver-driveways"
      schema={schema}
    />
  );
};

export default PaverDriveways;