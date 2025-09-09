import React from "react";

interface TrustIndicatorProps {
  icon: React.ComponentType<{ className?: string }> | React.ReactNode;
  title: string;
  subtitle: string;
  delay?: string;
}

export const TrustIndicator = ({ icon: Icon, title, subtitle, delay }: TrustIndicatorProps) => {
  const renderIcon = (): React.ReactNode => {
    // If it's already a React element (JSX), return it directly
    if (React.isValidElement(Icon)) {
      return Icon;
    }
    
    // Otherwise, assume it's a component and render it
    try {
      const IconComponent = Icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="w-8 h-8 text-primary-glow" />;
    } catch (error) {
      console.error('Error rendering icon:', error);
      return <div className="w-8 h-8 bg-primary-glow/50 rounded"></div>;
    }
  };

  return (
    <div className="text-center" style={{ animationDelay: delay }}>
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
        {renderIcon()}
      </div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-white/80 text-sm">{subtitle}</p>
    </div>
  );
};
