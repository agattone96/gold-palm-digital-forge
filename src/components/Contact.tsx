import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(727) 621-4041",
      subtitle: "Free estimates & consultation",
      action: "tel:7276214041"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@goldpalmsolutions.com",
      subtitle: "Quick response guaranteed",
      action: "mailto:info@goldpalmsolutions.com"
    },
    {
      icon: MapPin,
      title: "Service Area", 
      details: "Sarasota, FL & Surrounding",
      subtitle: "Bradenton, Palmetto, Venice, Lakewood Ranch & more",
      action: ""
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Daily: 5AM-10PM",
      subtitle: "Free estimates available",
      action: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">  
            Ready to transform your property? Contact us for a free, no-obligation consultation. 
            Our experts will assess your needs and provide a detailed estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
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
                        placeholder="(000) 000-0000"
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
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md transition-smooth focus:ring-primary focus:border-primary bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="tree-removal">Tree Removal</option>
                      <option value="tree-trimming">Tree Trimming</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="concrete">Concrete Work</option>
                      <option value="junk-removal">Junk Removal</option>
                      <option value="emergency">Emergency Service</option>
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

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className={`hover-lift border-0 shadow-card animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-xl font-semibold text-primary hover:text-primary-glow transition-smooth"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <div className="text-xl font-semibold text-foreground">
                            {info.details}
                          </div>
                        )}
                        <p className="text-muted-foreground mt-1">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency CTA */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Emergency Storm Damage?
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide 24/7 emergency tree removal and storm cleanup services
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line
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