import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface ContactFormProps {
  onSubmit?: (formData: ContactFormData) => void;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className={className}>
      <Card className="border-0 shadow-premium">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold font-serif text-foreground">
              Request Your Free Estimate
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="transition-smooth focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="transition-smooth focus:ring-primary focus:border-primary"
                  placeholder="(727) 621-4041"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="transition-smooth focus:ring-primary focus:border-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-md transition-smooth focus:ring-primary focus:border-primary bg-background text-foreground"
              >
                <option value="">Select a service</option>
                <option value="tree-removal">Tree Removal</option>
                <option value="limb-reductions">Limb Reductions / Tree Trimming</option>
                <option value="stump-grinding">Stump Grinding</option>
                <option value="lawn-maintenance">Lawn Maintenance</option>
                <option value="concrete">Concrete</option>
                <option value="paver-gravel-driveways">Paver & Gravel Driveways</option>
                <option value="land-clearing-grading">Land Clearing & Grading</option>
                <option value="junk-removal">Junk Removal</option>
                <option value="emergency-storm-response">Emergency Storm Response</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="transition-smooth focus:ring-primary focus:border-primary resize-none"
                placeholder="Please describe your project or service needs..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-lg font-semibold"
            >
              Get My Free Estimate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export type { ContactFormData };