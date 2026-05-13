import { useEffect, useState } from "react";
import { Users, Fuel, Phone, MessageCircle, X, Check } from "lucide-react";

type Car = {
  name: string;
  seats: number;
  fuel: "Diesel" | "Petrol";
  price: number;
  image: string;
  features?: string[];
  perfectFor?: string[];
};

const cars: Car[] = [
  {
    name: "Innova Crysta",
    seats: 7,
    fuel: "Diesel",
    price: 20,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=70",
    features: ["Spacious 7-seater", "Full AC", "Music System", "Comfortable Captain Seats", "Mobile Charging"],
    perfectFor: ["Family Trips", "Outstation Tours", "Airport Transfers"],
  },
  {
    name: "Innova Crysta Bucket Seat",
    seats: 6,
    fuel: "Diesel",
    price: 20,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70",
    features: ["Premium Bucket Seats", "Full AC", "Extra Legroom", "Music System", "Mobile Charging"],
    perfectFor: ["Corporate Travel", "Family Comfort", "Long Distance Trips"],
  },
  {
    name: "Innova",
    seats: 7,
    fuel: "Diesel",
    price: 17,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=70",
    features: ["7-Seater MUV", "Full AC", "Music System", "Reliable & Smooth", "Ample Boot Space"],
    perfectFor: ["Family Outings", "Outstation Trips", "Group Travel"],
  },
  {
    name: "Rumion",
    seats: 7,
    fuel: "Petrol",
    price: 16,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=70",
    features: ["Modern 7-Seater", "Full AC", "Touchscreen Music", "Fuel Efficient", "Spacious Cabin"],
    perfectFor: ["City Travel", "Weekend Getaways", "Family Trips"],
  },
  {
    name: "Urbania Force Traveller",
    seats: 16,
    fuel: "Diesel",
    price: 32,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=70",
    features: [
      "Pushback Recliner Seats",
      "Full AC",
      "LED Ambient Lighting",
      "Music System & Screen",
      "Mobile Charging Points",
      "Premium Luxury Interior",
      "Spacious & Comfortable",
      "Clean & Hygienic Vehicle",
    ],
    perfectFor: ["Family Trips", "Corporate Tours", "Pilgrimage Tours", "Airport Transfers", "Outstation Trips"],
  },
  {
    name: "Sedan / Hatchback",
    seats: 5,
    fuel: "Petrol",
    price: 14,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=70",
    features: ["Comfortable 5-Seater", "Full AC", "Music System", "Fuel Efficient", "Easy City Drive"],
    perfectFor: ["City Travel", "Airport Transfers", "Short Outstation"],
  },
];

export function Cars() {
  const [active, setActive] = useState<Car | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="cars" aria-label="Our Fleet" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy">Our Fleet</h2>
          <p className="mt-3 text-muted-foreground">Chauffeur-driven, well-maintained vehicles for every journey</p>
        </div>

        <div
          className="no-scrollbar -mx-4 sm:-mx-6 px-4 sm:px-6 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3"
          role="list"
        >
          {cars.map((c) => (
            <article
              key={c.name}
              role="listitem"
              onClick={() => setActive(c)}
              className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-[32%] lg:w-[24%] cursor-pointer group bg-card rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-soft overflow-hidden relative">
                <img
                  src={c.image}
                  alt={`${c.name} — ${c.seats} seater ${c.fuel} cab for hire`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-light/95 text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
                  {c.seats} Seater
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy text-lg">{c.name}</h3>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.seats} Seater</span>
                  <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" />{c.fuel}</span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting</p>
                    <p className="text-xl font-bold text-brand">
                      ₹{c.price}<span className="text-xs font-normal text-muted-foreground">/km</span>
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-brand group-hover:underline">View Details →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl"
          >
            <div className="relative">
              <img src={active.image} alt={active.name} className="w-full h-56 sm:h-72 object-cover" />
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-3 right-3 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-navy">{active.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" />{active.seats} Seater</span>
                    <span className="flex items-center gap-1"><Fuel className="h-4 w-4" />{active.fuel}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-brand">
                  ₹{active.price}<span className="text-sm font-normal text-muted-foreground">/km</span>
                </p>
              </div>

              {active.features && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wide">Features</h4>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.perfectFor && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wide">Perfect For</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.perfectFor.map((p) => (
                      <span key={p} className="text-xs px-3 py-1 rounded-full bg-soft text-navy border">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+919821790471"
                  className="h-12 rounded-lg bg-brand text-brand-foreground font-semibold flex items-center justify-center gap-2 hover:bg-brand/90 transition"
                >
                  <Phone className="h-5 w-5" /> Call Now: 9821790471
                </a>
                <a
                  href="https://wa.me/918169730810"
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 rounded-lg bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd59] transition"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp: 8169730810
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
