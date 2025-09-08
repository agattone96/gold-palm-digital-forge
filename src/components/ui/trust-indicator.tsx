import { LucideIcon } from "lucide-react";

interface TrustIndicatorProps {
  icon: LucideIcon | React.ReactNode;
  title: string;
  subtitle: string;
  delay?: string;
}

export const TrustIndicator = ({ icon: Icon, title, subtitle, delay }: TrustIndicatorProps) => {
  return (
    <div className="text-center" style={{ animationDelay: delay }}>
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
        {typeof Icon === 'function' ? <Icon className="w-8 h-8 text-primary-glow" /> : Icon}
      </div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-white/80 text-sm">{subtitle}</p>
    </div>
  );
};