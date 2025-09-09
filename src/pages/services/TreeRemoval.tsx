import ServicePage from "@/components/ServicePage";

const TreeRemoval = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tree Removal Services",
    "description": "Professional tree removal services in Sarasota, Bradenton, and surrounding areas. Licensed, insured, and available 24/7 for emergency tree removal.",
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
    "serviceType": "Tree Removal",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for tree removal services"
    }
  };

  const faq = [
    {
      q: "How much does tree removal cost in Sarasota?",
      a: "Tree removal costs vary based on size, location, and complexity. We provide free estimates and transparent pricing. Most residential tree removals range from $300-$3,000 depending on the tree's height, diameter, and accessibility."
    },
    {
      q: "Do I need a permit for tree removal in Sarasota?",
      a: "Some trees in Sarasota require permits before removal, especially heritage trees or trees over certain sizes. We help guide you through the permit process and can assist with applications when needed."
    },
    {
      q: "How quickly can you remove a tree in an emergency?",
      a: "We offer 24/7 emergency tree removal services. For storm damage or hazardous situations, we typically respond within 2-4 hours. Our emergency crews are equipped with specialized equipment for safe, rapid removal."
    },
    {
      q: "Are you licensed and insured for tree removal?",
      a: "Yes, Gold Palm Solutions is fully licensed and insured with comprehensive liability coverage. We're certified arborists with over 30 years of experience in safe tree removal practices."
    }
  ];

  return (
    <ServicePage
      title="Tree Removal Sarasota | Licensed & Insured | Gold Palm Solutions"
      blurb="Professional tree removal services in Sarasota, Bradenton & Tampa Bay. Licensed, insured, and available 24/7 for emergency tree removal. Free estimates with specialized equipment and certified arborists."
      bullets={[
        "Hazardous tree removal with crane and bucket truck access",
        "Complete stump grinding and root removal included",
        "Hurricane and storm damage cleanup specialists",
        "Debris haul-away and site cleanup guaranteed",
        "Permit assistance and heritage tree consultation",
        "24/7 emergency response for dangerous situations",
        "Certified arborists with 30+ years experience",
        "Full liability insurance and workers compensation"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/tree-removal"
      schema={schema}
    />
  );
};

export default TreeRemoval;