import ServicePage from "@/components/ServicePage";

const JunkRemoval = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Junk Removal Services",
    "description": "Professional junk removal and debris hauling services in Sarasota, Bradenton, and surrounding areas. Licensed, insured, and eco-friendly disposal.",
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
    "serviceType": "Junk Removal",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for junk removal services"
    }
  };

  const faq = [
    {
      q: "What items can you remove during junk removal?",
      a: "We remove furniture, appliances, construction debris, yard waste, electronics, and most household items. We cannot remove hazardous materials, chemicals, or items requiring special disposal permits."
    },
    {
      q: "How much does junk removal cost in Sarasota?",
      a: "Junk removal costs depend on volume and type of items. We offer transparent pricing with free estimates. Most residential cleanouts range from $150-$800 depending on the amount of debris."
    },
    {
      q: "Do you recycle or donate items during removal?",
      a: "Yes, we prioritize eco-friendly disposal. Usable items are donated to local charities, and recyclable materials are taken to appropriate facilities rather than landfills."
    },
    {
      q: "Can you remove junk from inside my home or business?",
      a: "Absolutely. Our team will safely remove items from any location on your property, including basements, attics, garages, and upper floors. We protect your property during removal."
    }
  ];

  return (
    <ServicePage
      title="Junk Removal Sarasota | Professional Debris Hauling | Gold Palm Solutions"
      blurb="Professional junk removal services in Sarasota, Bradenton & Tampa Bay. Eco-friendly disposal, donation services, and complete cleanouts. Licensed and insured with free estimates."
      bullets={[
        "Complete home and business cleanout services",
        "Furniture, appliance, and debris removal",
        "Eco-friendly disposal and recycling programs",
        "Donation services for usable items",
        "Construction and renovation debris hauling",
        "Same-day and emergency removal available",
        "Licensed and insured junk removal specialists",
        "Free estimates with transparent pricing"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/junk-removal"
      schema={schema}
    />
  );
};

export default JunkRemoval;