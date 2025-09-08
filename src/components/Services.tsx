import { TreePine, Scissors, Truck, Building, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import treeServiceImage from "@/assets/hero-tree-service.jpg";
import landscapingImage from "@/assets/landscaping-service.jpg";
import concreteImage from "@/assets/concrete-service.jpg";
import junkRemovalImage from "@/assets/junk-removal-service.jpg";

const Services = () => {
  const services = [
    {
      icon: TreePine,
      title: "Tree Removal & Trimming",
      description: "Safe, professional tree removal and trimming services. From hazardous removals to routine maintenance, our certified arborists handle it all.",
      image: treeServiceImage,
      features: ["Dangerous tree removal", "Crown reduction", "Storm damage cleanup", "Stump grinding"],
    },
    {
      icon: Leaf,
      title: "Landscaping & Design",
      description: "Transform your outdoor space with our comprehensive landscaping services. Beautiful designs that enhance your property value.",
      image: landscapingImage,
      features: ["Garden design", "Plant installation", "Irrigation systems", "Outdoor lighting"],
    },
    {
      icon: Building,
      title: "Concrete Services",
      description: "Professional concrete work for driveways, walkways, patios, and more. Quality craftsmanship with lasting results.",
      image: concreteImage,
      features: ["Driveways", "Walkways", "Patios", "Decorative concrete"],
    },
    {
      icon: Truck,
      title: "Junk Removal",
      description: "Complete cleanout services for homes and businesses. We handle the heavy lifting so you don't have to.",
      image: junkRemovalImage,
      features: ["Home cleanouts", "Construction debris", "Furniture removal", "Eco-friendly disposal"],
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
            From tree care to complete property transformations, Gold Palm Solutions delivers 
            exceptional results with unmatched professionalism and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`hover-lift overflow-hidden border-0 shadow-card animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/70"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full hover-glow">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-xl p-8 md:p-12 shadow-premium animate-fade-in">
          <h3 className="text-3xl font-bold font-serif text-foreground mb-4">
            Ready to Transform Your Property?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate from our professional team. 
            We'll assess your needs and provide a detailed plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Call (727) 621-4041
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;