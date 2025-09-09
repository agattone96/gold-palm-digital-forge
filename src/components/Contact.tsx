import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm, ContactFormData } from "@/components/ui/contact-form";
import { ContactInfoCard } from "@/components/ui/contact-info-card";
import {
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
  COMPANY_EMAIL,
} from "@/lib/constants";

const Contact = () => {
  const handleFormSubmit = (formData: ContactFormData) => {
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: FORMATTED_PHONE_NUMBER,
      subtitle: "Free estimates & consultation",
      action: `tel:${PHONE_NUMBER}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: COMPANY_EMAIL,
      subtitle: "Quick response guaranteed",
      action: `mailto:${COMPANY_EMAIL}`,
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Sarasota, FL & Surrounding",
      subtitle:
        "Bradenton, Palmetto, Venice, Lakewood Ranch, Longboat Key, Siesta Key, Parrish, Port Charlotte, Nokomis, Englewood",
      action: ""
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Daily: 5AM–10PM",
      subtitle: "24/7 emergency response",
      action: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Get Your Free Tree Removal Estimate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to remove that dangerous tree? Contact us for a free, no-obligation consultation.
            Our certified arborists will assess your needs and provide a detailed estimate for tree removal, stump grinding, or any of our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm 
            onSubmit={handleFormSubmit}
            className="animate-slide-in-left"
          />

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <ContactInfoCard
                key={info.title}
                icon={info.icon}
                title={info.title}
                details={info.details}
                subtitle={info.subtitle}
                action={info.action}
                index={index}
              />
            ))}

            {/* Emergency CTA */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Emergency Storm Damage?</h3>
                <p className="text-muted-foreground mb-4">
                  We provide 24/7 emergency tree removal and storm cleanup services
                </p>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
