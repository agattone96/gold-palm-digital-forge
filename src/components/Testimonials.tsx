import { Star, Quote, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_NAME } from "@/lib/constants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Sarasota, FL",
      rating: 5,
      text: `${COMPANY_NAME} removed three large oak trees from our property after Hurricane Ian. They were professional, quick, and cleaned up perfectly. Highly recommend!`,
      service: "Tree Removal"
    },
    {
      name: "Mike Rodriguez",
      location: "Bradenton, FL", 
      rating: 5,
      text: "The landscaping work they did transformed our backyard into an oasis. The attention to detail and quality of plants was exceptional. Worth every penny!",
      service: "Landscaping"
    },
    {
      name: "Jennifer Walsh",
      location: "Tampa, FL",
      rating: 5,
      text: "Called for emergency tree service during a storm. They arrived quickly, handled the dangerous situation safely, and even helped with insurance paperwork.",
      service: "Emergency Service"
    },
    {
      name: "David Chen",
      location: "Clearwater, FL",
      rating: 5,
      text: "Professional concrete work on our driveway and walkways. The crew was punctual, clean, and the finished product looks amazing. Great value for the quality.",
      service: "Concrete Services"
    },
    {
      name: "Lisa Thompson",
      location: "Lakewood Ranch, FL",
      rating: 5,
      text: "Needed a full property cleanout after my mother passed. The team was respectful, efficient, and handled everything with care. Truly compassionate service.",
      service: "Junk Removal"
    },
    {
      name: "Robert Martinez",
      location: "St. Petersburg, FL",
      rating: 5,
      text: "Regular tree maintenance for our commercial property. Always reliable, fairly priced, and professional. Our go-to team for all property needs.",
      service: "Commercial Services"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners and businesses 
            across the Tampa Bay area say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className={`hover-lift border-0 shadow-card animate-scale-in h-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="bg-card rounded-xl p-8 shadow-premium animate-fade-in">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-6">
              Trusted by 500+ Satisfied Customers
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span className="font-medium">5-Star Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="font-medium">Certified Arborists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
