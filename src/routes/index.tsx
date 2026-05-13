import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Cars } from "@/components/site/Cars";
import { Tariff } from "@/components/site/Tariff";
import { Cities } from "@/components/site/Cities";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyUs } from "@/components/site/WhyUs";
import { Deals } from "@/components/site/Deals";
import { Eligibility } from "@/components/site/Eligibility";
import { Testimonials } from "@/components/site/Testimonials";
import { AppBanner } from "@/components/site/AppBanner";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manasvi Tours and Travels | Outstation Cabs Maharashtra" },
      {
        name: "description",
        content:
          "Book chauffeur-driven outstation cabs and tour packages across Maharashtra. Innova Crysta, Urbania, Sedan & more from ₹14/km. Call 9821790471.",
      },
      {
        name: "keywords",
        content:
          "outstation cabs Maharashtra, Innova Crysta hire, Urbania Force Traveller, Mumbai Pune cab, tour packages Maharashtra, Manasvi Tours and Travels, chauffeur driven cabs",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Manasvi Tours and Travels | Outstation Cabs Maharashtra" },
      {
        property: "og:description",
        content:
          "Chauffeur-driven outstation cabs & curated tour packages across Maharashtra. From ₹14/km. Zero hidden charges.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://manasvi-drive-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Manasvi Tours and Travels | Outstation Cabs Maharashtra" },
      { name: "twitter:description", content: "Outstation cabs & tour packages across Maharashtra from ₹14/km." },
    ],
    links: [{ rel: "canonical", href: "https://manasvi-drive-hub.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Manasvi Tours and Travels",
          description: "Chauffeur-driven outstation cabs and curated tour packages across Maharashtra.",
          url: "https://manasvi-drive-hub.lovable.app/",
          telephone: ["+91-98217-90471", "+91-81697-30810"],
          priceRange: "₹14–₹32/km",
          areaServed: { "@type": "State", name: "Maharashtra" },
          address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <main>
        <Hero />
        <Reveal variant="up"><Cars /></Reveal>
        <Reveal variant="zoom"><Tariff /></Reveal>
        <Reveal variant="left"><Cities /></Reveal>
        <Reveal variant="up"><HowItWorks /></Reveal>
        <Reveal variant="right"><WhyUs /></Reveal>
        <Reveal variant="zoom"><Deals /></Reveal>
        <Reveal variant="left"><Eligibility /></Reveal>
        <Reveal variant="up"><Testimonials /></Reveal>
        <Reveal variant="zoom"><AppBanner /></Reveal>
        <Reveal variant="up"><Faq /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
