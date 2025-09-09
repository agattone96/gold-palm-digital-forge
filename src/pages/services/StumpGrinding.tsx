import ServicePage from "@/components/ServicePage";

const StumpGrinding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stump Grinding Services",
    "description": "Professional stump grinding and removal services in Sarasota, Bradenton, and surrounding areas. Complete stump removal with cleanup included.",
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
    "serviceType": "Stump Grinding",
    "offers": {
      "@type": "Offer",
      "description": "Free estimates for stump grinding services"
    }
  };

  const faq = [
    {
      q: "How much does stump grinding cost in Sarasota?",
      a: "Stump grinding costs typically range from $100-$400 per stump, depending on size and root system complexity. We provide free estimates and can often grind multiple stumps for volume discounts."
    },
    {
      q: "How deep do you grind stumps?",
      a: "We grind stumps 6-12 inches below ground level, which is sufficient for most landscaping and construction needs. Deeper grinding is available upon request for specific projects."
    },
    {
      q: "What happens to the wood chips after grinding?",
      a: "Wood chips can be left as natural mulch for your landscaping, or we can haul them away completely. Many customers use the chips around trees and garden beds as organic mulch."
    },
    {
      q: "Can you grind stumps near utilities or structures?",
      a: "Yes, our precision equipment allows us to safely grind stumps near buildings, fences, and utilities. We always call 811 for utility marking before beginning work near underground lines."
    }
  ];

  return (
    <ServicePage
      title="Stump Grinding Sarasota | Professional Stump Removal | Gold Palm Solutions"
      blurb="Expert stump grinding services in Sarasota, Bradenton & Tampa Bay. Complete stump removal with precision equipment. Free estimates and cleanup included."
      bullets={[
        "Professional stump grinding equipment for all sizes",
        "Grinding 6-12 inches below ground level",
        "Wood chip removal or mulch conversion options",
        "Safe operation near utilities and structures",
        "Multiple stump discounts available",
        "Complete site cleanup and restoration",
        "Licensed and insured stump grinding specialists",
        "Same-day service available for most projects"
      ]}
      faq={faq}
      canonical="https://www.goldpalmsolutions.com/services/stump-grinding"
      schema={schema}
    />
  );
};

export default StumpGrinding;