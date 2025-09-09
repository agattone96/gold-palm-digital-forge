import ServicePage from "@/components/ServicePage";

const LimbReductions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tree Trimming & Limb Reduction Services",
    "description": "Professional tree trimming and limb reduction services in Sarasota, Bradenton, and surrounding areas. Certified arborists providing safe, proper pruning techniques.",
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
    "serviceType": "Tree Trimming",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for tree trimming services"
    }
  };

  const faq = [
    {
      q: "When is the best time for tree trimming in Florida?",
      a: "In Florida, the best time for tree trimming is during the dormant season (late fall to early spring). However, dead, diseased, or hazardous limbs should be removed immediately regardless of season."
    },
    {
      q: "How much of a tree can be safely trimmed?",
      a: "Generally, no more than 25% of a tree's canopy should be removed in a single trimming session. Our certified arborists follow proper pruning standards to maintain tree health and structure."
    },
    {
      q: "Do you clean up all the debris after trimming?",
      a: "Yes, complete cleanup is included in all our tree trimming services. We remove all branches, leaves, and debris, leaving your property clean and ready to enjoy."
    },
    {
      q: "Can you trim trees near power lines?",
      a: "We can trim trees near power lines, but we coordinate with utility companies when necessary. For trees touching active power lines, the utility company must be contacted first for safety."
    }
  ];

  return (
    <ServicePage
      title="Tree Trimming Sarasota | Limb Reductions | Gold Palm Solutions"
      blurb="Professional tree trimming and limb reduction services in Sarasota, Bradenton & Tampa Bay. Certified arborists using proper pruning techniques to maintain tree health and safety."
      bullets={[
        "Certified arborist tree trimming and pruning",
        "Crown reduction and canopy thinning services",
        "Deadwood removal and hazard elimination",
        "Proper pruning cuts to promote tree health",
        "Power line clearance coordination",
        "Complete debris removal and cleanup",
        "Seasonal trimming schedule recommendations",
        "Hurricane preparation and storm-proofing"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/limb-reductions"
      schema={schema}
    />
  );
};

export default LimbReductions;