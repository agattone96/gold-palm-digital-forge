// src/components/SeoHead.tsx
import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLdId?: string;
  jsonLd?: Record<string, any> | null;
};

export default function SeoHead({ title, description, canonical, jsonLdId, jsonLd }: Props) {
  useEffect(() => {
    document.title = title;
    const created: (HTMLMetaElement | HTMLLinkElement | HTMLScriptElement)[] = [];

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
        created.push(el);
      }
      el.content = content;
    };

    if (description) ensureMeta("description", description);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
        created.push(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    if (jsonLd && jsonLdId) {
      const existing = document.getElementById(jsonLdId) as HTMLScriptElement | null;
      if (!existing) {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.id = jsonLdId;
        s.text = JSON.stringify(jsonLd);
        document.head.appendChild(s);
        created.push(s);
      }
    }

    return () => {
      // Keep SEO tags between SPA navigations; do not remove on unmount
    };
  }, [title, description, canonical, jsonLd, jsonLdId]);

  return null;
}
