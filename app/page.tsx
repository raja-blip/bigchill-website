import ImageCarousel from "@/components/ImageCarousel";

const heroImages = [
  "/images/hero/14_Day Facade_RajaGanesh Villa.jpg",
  "/images/hero/15_Day Facade_RajaGanesh Villa.jpg",
  "/images/hero/1_Evening Facade_Rajaganesh Villa.jpg",
  "/images/hero/2_Evening Tea_Rajaganesh Villa.jpg",
  "/images/exteriors/75_Drone_RajaGanesh Villa.jpg",
  "/images/views-hillock/40_Sunrise_RajaGanesh Villa.jpg"
];

const spaceTabs = [
  {
    title: "The Master Suites",
    body: "Two expansive king bedrooms on the upper floor, each with a private balcony looking directly into the forest and hillock.",
    images: [
      "/images/master-suite-1/18_Room 1_RajaGanesh Villa.jpg",
      "/images/master-suite-1/19_Room 1_RajaGanesh Villa.jpg",
      "/images/master-suite-1/20_Room 1_RajaGanesh Villa.jpg",
      "/images/master-suite-1/21_Room 1_RajaGanesh Villa.jpg",
      "/images/master-suite-1/35_Room 1 Bathroom_RajaGanesh Villa.jpg",
      "/images/master-suite-2/22_Room 2_RajaGanesh Villa.jpg",
      "/images/master-suite-2/23_Room 2_RajaGanesh Villa.jpg",
      "/images/master-suite-2/24_Room 2_RajaGanesh Villa.jpg",
      "/images/master-suite-2/37_Room 2 Bathroom_RajaGanesh Villa.jpg"
    ]
  },
  {
    title: "The Study (The +0.5)",
    body: "Our secret weapon. A dedicated study room perfect for a quiet remote-work session or as an extra cozy nook for the kids.",
    images: [
      "/images/study/4_Study Room_Rajaganesh Villa.jpg",
      "/images/living-dining/25_Corridor_RajaGanesh Villa.jpg",
      "/images/exteriors/71_Reading Corner_RajaGanesh Villa.jpg"
    ]
  },
  {
    title: "Living & Dining",
    body: "Double-height living spaces designed for slow mornings. A 6-seater dining area where the family actually gathers.",
    images: [
      "/images/living-dining/10_Living Room_RajaGanesh Villa.jpg",
      "/images/living-dining/11_Living Room_RajaGanesh Villa.jpg",
      "/images/living-dining/12_Living Room_RajaGanesh Villa.jpg",
      "/images/living-dining/5_Living Room_RajaGanesh Villa.jpg",
      "/images/living-dining/6_Living Room_RajaGanesh Villa.jpg",
      "/images/living-dining/7_Dining_RajaGanesh Villa.jpg",
      "/images/living-dining/8_Dining_RajaGanesh Villa.jpg"
    ]
  }
];

const foodImages = [
  "/images/kitchen-food/50_Breakfast_RajaGanesh Villa.jpg",
  "/images/kitchen-food/9_Kitchen_RajaGanesh Villa.jpg",
  "/images/kids-corner/59_Sandpit_RajaGanesh Villa.jpg",
  "/images/kids-corner/58_Badminton_RajaGanesh Villa.jpg",
  "/images/kids-corner/sandpit.JPG",
  "/images/kids-corner/swing.JPG"
];

const seasonCards = [
  {
    season: "Oct-Feb (Mist)",
    description:
      "Wake up to a white blanket of fog over the hillock, with crisp evenings that call for bonfires and long conversations.",
    tip: "Best for morning nature walks."
  },
  {
    season: "Mar-May (Gold)",
    description:
      "Clear skies, panoramic valley visibility, and breezy balconies make this season ideal for active days and restful nights.",
    tip: "Best for trekking and wildlife."
  },
  {
    season: "Jun-Sep (Emerald)",
    description:
      "Monsoon magic turns the landscape neon green and wraps the villa in a soothing rain-soaked calm.",
    tip: "Best for tea-sipping and reading."
  }
];

const nearby = [
  "Banasura Sagar Dam",
  "Wayanad Wildlife Sanctuary",
  "Chembra Peak",
  "Thirunelli Temple",
  "Edakkal Caves"
];

const allGallery = [
  "/images/exteriors/53_RajaGanesh Villa.jpg",
  "/images/exteriors/75_Drone_RajaGanesh Villa.jpg",
  "/images/views-hillock/40_Sunrise_RajaGanesh Villa.jpg",
  "/images/living-dining/11_Living Room_RajaGanesh Villa.jpg",
  "/images/master-suite-1/19_Room 1_RajaGanesh Villa.jpg",
  "/images/master-suite-2/23_Room 2_RajaGanesh Villa.jpg",
  "/images/kitchen-food/9_Kitchen_RajaGanesh Villa.jpg",
  "/images/kids-corner/58_Badminton_RajaGanesh Villa.jpg",
  "/images/experiences-wayanad/banasura sagar dam.webp",
  "/images/experiences-wayanad/chembra peak.jpg",
  "/images/experiences-wayanad/edakkal caves.webp",
  "/images/experiences-wayanad/tholpetty-wildlife-sanctuary.jpg"
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "The Big Chill",
  description:
    "A premium 2.5-bedroom hillock retreat in Wayanad for up to 6 guests.",
  url: "https://bigchillwayanad.com",
  image: heroImages,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wayanad",
    addressRegion: "Kerala",
    addressCountry: "IN"
  },
  sameAs: ["https://www.stayvista.com/villa/the-big-chill"]
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="hero">
        <nav className="nav">
          <p className="brand">The Big Chill</p>
          <a href="#contact" className="text-link">
            Contact
          </a>
        </nav>

        <div className="container">
          <ImageCarousel
            images={heroImages}
            title="Hero highlights of The Big Chill"
            variant="hero"
          />
        </div>

        <section className="hero-copy">
          <p className="eyebrow">Wayanad, Kerala</p>
          <h1>The Big Chill: A Hillock Sanctuary in Wayanad.</h1>
          <p>
            More than a stay - a 2.5-bedroom retreat for 6, where mist-covered peaks
            meet home-style comfort food.
          </p>
          <div className="cta-group">
            <a href="#experience" className="btn btn-primary">
              View the Experience
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Us
            </a>
          </div>
        </section>
      </header>

      <section id="experience" className="section container">
        <h2>The Space: 2.5 Bedrooms & Beyond</h2>
        <p className="section-intro">
          A clear view of how the home flows, from private retreats to shared
          gathering spaces.
        </p>
        <div className="tabs-grid">
          {spaceTabs.map((tab) => (
            <article key={tab.title} className="card">
              <h3>{tab.title}</h3>
              <p>{tab.body}</p>
              <ImageCarousel images={tab.images} title={tab.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <h2>Food & Heart</h2>
          <p className="section-intro">
            Warm hospitality from Babul, and food that feels like home.
          </p>
          <p>
            From North Indian and South Indian comfort dishes to custom-cooked
            favorites. Breakfast is on us; lunch and dinner are crafted on demand to
            your spice preference.
          </p>
          <p>
            While the resident cook preps your meal, let the kids enjoy the sand pit
            and swing in their own playful corner.
          </p>
          <ImageCarousel images={foodImages} title="Food and family spaces" />
        </div>
      </section>

      <section className="section container">
        <h2>Nature & Seasons</h2>
        <p className="section-intro">
          Choose your version of Wayanad: misty, golden, or monsoon emerald.
        </p>
        <div className="season-grid">
          {seasonCards.map((card) => (
            <article key={card.season} className="card">
              <h3>{card.season}</h3>
              <p>{card.description}</p>
              <p className="tip">{card.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Wayanad Beyond the Gate</h2>
          <p className="section-intro">
            No car needed for a gentle plantation walk right outside the gate.
          </p>
          <p>
            Step out into coffee and pepper trails, then plan day trips to iconic
            spots nearby.
          </p>
          <ul className="nearby-list">
            {nearby.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
          <ImageCarousel
            images={[
              "/images/experiences-wayanad/chembra peak.jpg",
              "/images/experiences-wayanad/lakkidi view point.jpg",
              "/images/experiences-wayanad/banasura sagar dam.webp",
              "/images/experiences-wayanad/tholpetty-wildlife-sanctuary.jpg",
              "/images/experiences-wayanad/edakkal caves.webp",
              "/images/experiences-wayanad/thirunelli-temple.jpg"
            ]}
            title="Nearby places in Wayanad"
          />
        </div>
      </section>

      <section className="section container">
        <h2>Gallery</h2>
        <p className="section-intro">
          A full visual walkthrough of The Big Chill and its surrounding experience.
        </p>
        <div className="gallery-grid">
          {allGallery.map((image) => (
            <figure className="gallery-item" key={image}>
              <img src={image} alt="The Big Chill gallery" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact">
        <h2>Contact The Big Chill</h2>
        <p className="section-intro">
          Reach out directly for availability, pricing, and trip planning.
        </p>
        <div className="contact-box">
          <p>
            Phone: <a href="tel:+919999999999">+91 99999 99999</a>
          </p>
          <p>
            Email: <a href="mailto:hello@bigchillwayanad.com">hello@bigchillwayanad.com</a>
          </p>
          <p className="small">
            Prefer StayVista?{" "}
            <a
              href="https://www.stayvista.com/villa/the-big-chill"
              target="_blank"
              rel="noreferrer"
            >
              Find us on StayVista
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
