import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  features: string[];
  index?: number;
  onLearnMore?: () => void;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  features, 
  index = 0,
  onLearnMore 
}: ServiceCardProps) => {
  return (
    <Card 
      className="hover-lift overflow-hidden border-0 shadow-card animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
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
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="w-full hover-glow"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};
