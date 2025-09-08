// src/components/pages/ServicePage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from "@/lib/constants";

type FAQ = { q: string; a: string };
type Props = {
  title: string;
  blurb: string;
  bullets: string[];
  cityHint?: string;
  faq?: FAQ[];
  canonical?: string;
  schema?: Record<string, unknown>;
};

export default function ServicePage({ title, blurb, bullets, faq = [], canonical, schema }: Props) {
  const pageTitle = `${title} | ${COMPANY_NAME}`;
  const desc = blurb.slice(0, 150);

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={desc}
        canonical={canonical}
        jsonLdId="service-schema"
        jsonLd={schema || null}
      />

      <section className="gradient-hero py-16 text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">{title}</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">{blurb}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 bg-background/10 px-3 py-2 rounded-card">
              <ShieldCheck className="w-5 h-5" /> Licensed & Insured
            </div>
            <div className="inline-flex items-center gap-2 bg-background/10 px-3 py-2 rounded-card">
              <CheckCircle2 className="w-5 h-5" /> 30+ Years Experience
            </div>
            <div className="inline-flex items-center gap-2 bg-background/10 px-3 py-2 rounded-card">
              <Phone className="w-5 h-5" /> 24/7 Emergency Response
            </div>
          </div>
          <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground" asChild>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="w-5 h-5 mr-2" /> Call {FORMATTED_PHONE_NUMBER}
                </a>
              </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">What’s included</h2>
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Free estimate</h2>
              <p className="text-muted-foreground mb-4">
                Call now or request a free, no-obligation estimate. Fast scheduling for Sarasota, Bradenton & Lakewood Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-primary text-primary-foreground" asChild>
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Phone className="w-5 h-5 mr-2" /> Call {FORMATTED_PHONE_NUMBER}
                    </a>
                  </Button>
                <Button variant="outline" asChild>
                  <a href="/#contact">Request Free Estimate</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {faq.length > 0 && (
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faq.map((f, i) => (
                <Card key={i} className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
