import { Shield, Award, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_NAME } from "@/lib/constants";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every project prioritizes safety with proper equipment, training, and insurance coverage.",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our certified professionals deliver superior results with attention to every detail.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We show up on time, complete projects as promised, and stand behind our work.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen, communicate, and exceed expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Your Trusted 
              <span className="block text-primary">Property Partners</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              For over a decade, {COMPANY_NAME} has been the premier choice for property
              owners throughout the Sarasota, Bradenton, and Tampa Bay areas who demand
              exceptional quality and professional <a href="/services/tree-removal" className="text-primary hover:text-primary-glow">tree removal</a> service.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              What started as a small tree service has grown into a comprehensive property 
              solutions company, but we've never lost sight of our core values: safety, 
              quality, and customer satisfaction. Every <a href="/services/stump-grinding" className="text-primary hover:text-primary-glow">stump grinding</a> and <a href="/services/concrete-work" className="text-primary hover:text-primary-glow">concrete work</a> project, big or small, receives 
              the same level of professional attention and care.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Insured & Licensed</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className={`hover-lift border-0 shadow-card animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-serif text-foreground mb-8">
            Proudly Serving the Greater Tampa Bay Area
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "Sarasota", "Bradenton", "Tampa", "St. Petersburg", 
              "Clearwater", "Brandon", "Lakewood Ranch", "Palmetto",
              "Ellenton", "Parrish", "Anna Maria", "Longboat Key"
            ].map((city) => (
              <div 
                key={city} 
                className="bg-card rounded-lg p-4 shadow-card hover-lift text-center"
              >
                <span className="text-foreground font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
