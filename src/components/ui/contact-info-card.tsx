import { Card, CardContent } from "@/components/ui/card";

interface ContactInfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string;
  subtitle: string;
  action?: string;
  index?: number;
}

export const ContactInfoCard = ({ 
  icon: Icon, 
  title, 
  details, 
  subtitle, 
  action,
  index = 0
}: ContactInfoCardProps) => {
  return (
    <Card
      className="hover-lift border-0 shadow-card animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-foreground mb-1">
              {title}
            </h3>
            {action ? (
              <a
                href={action}
                className="text-xl font-semibold text-primary hover:text-primary-glow transition-smooth"
              >
                {details}
              </a>
            ) : (
              <div className="text-xl font-semibold text-foreground">
                {details}
              </div>
            )}
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
