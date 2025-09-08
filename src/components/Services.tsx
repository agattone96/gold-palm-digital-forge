import { TreePine, Scissors, Truck, Building, Leaf, Users } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { CTASection } from "@/components/ui/cta-section";
import treeServiceImage from "@/assets/hero-tree-service.jpg";
import landscapingImage from "@/assets/landscaping-service.jpg";
import concreteImage from "@/assets/concrete-service.jpg";
import junkRemovalImage from "@/assets/junk-removal-service.jpg";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from "@/lib/constants";

const Services = () => {
  const services = [
    {
      icon: TreePine,
      title: "Tree Removal & Trimming",
      description: "Safe, professional removals and trimming. From hazardous takedowns to routine maintenance, we handle it all.",
      image: treeServiceImage,
      features: ["Hazardous tree removal", "Limb reductions", "Hurricane/storm cleanup", "Stump grinding"],
    },
    {
      icon: Leaf,
      title: "Lawn Maintenance",
      description: "Keep your property clean and cared for with reliable maintenance.",
      image: landscapingImage,
      features: ["Mowing and edging", "Hedge trimming", "Seasonal cleanups", "Debris haul-away"],
    },
    {
      icon: Building,
      title: "Concrete, Paver & Gravel Driveways",
      description: "Quality flatwork and drive surfaces that last.",
      image: concreteImage,
      features: ["Driveways and slabs", "Walkways and patios", "Paver or gravel driveways", "Repairs and replacements"],
    },
    {
      icon: Truck,
      title: "Land Clearing & Grading",
      description: "Site prep done right with the proper machines.",
      image: junkRemovalImage,
      features: ["Brush and lot clearing", "Grading and leveling", "Access roads", "Debris removal"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From tree care to complete property transformations, {COMPANY_NAME} delivers
            exceptional results with unmatched professionalism and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              index={index}
              onLearnMore={() => console.log(`Learn more about ${service.title}`)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Property?"
          description="Get a free, no-obligation estimate from our professional team. We'll assess your needs and provide a detailed plan."
          primaryButtonText="Schedule Free Consultation"
          secondaryButtonText={`Call ${FORMATTED_PHONE_NUMBER}`}
          primaryButtonAction={() => console.log("Schedule consultation")}
          secondaryButtonAction={() => window.open(`tel:${PHONE_NUMBER}`)}
        />
      </div>
    </section>
  );
};

export default Services;
