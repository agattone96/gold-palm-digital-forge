import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  className?: string;
}

export const CTASection = ({ 
  title, 
  description, 
  primaryButtonText, 
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  className = ""
}: CTASectionProps) => {
  return (
    <div className={`text-center bg-card rounded-xl p-8 md:p-12 shadow-premium animate-fade-in ${className}`}>
      <h3 className="text-3xl font-bold font-serif text-foreground mb-4">
        {title}
      </h3>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8"
          onClick={primaryButtonAction}
        >
          {primaryButtonText}
        </Button>
        {secondaryButtonText && (
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8"
            onClick={secondaryButtonAction}
          >
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};