import ImageCarousel from "@/components/ImageCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

const heroImages = [
  {
    src: "/images/hero/14_Day Facade_RajaGanesh Villa.jpg",
    alt: "Day facade of The Big Chill villa in Wayanad"
  },
  {
    src: "/images/hero/15_Day Facade_RajaGanesh Villa.jpg",
    alt: "Front approach to The Big Chill surrounded by greenery"
  },
  {
    src: "/images/hero/1_Evening Facade_Rajaganesh Villa.jpg",
    alt: "Evening exterior lighting at The Big Chill"
  },
  {
    src: "/images/hero/2_Evening Tea_Rajaganesh Villa.jpg",
    alt: "Outdoor tea setup with sunset view at The Big Chill"
  },
  {
    src: "/images/exteriors/75_Drone_RajaGanesh Villa.jpg",
    alt: "Drone view of The Big Chill and its private grounds"
  },
  {
    src: "/images/views-hillock/40_Sunrise_RajaGanesh Villa.jpg",
    alt: "Sunrise over the hillock seen from The Big Chill"
  }
];

const spaceTabs = [
  {
    title: "The Master Suites",
    body: "Two expansive king bedrooms on the upper floor, each with a private balcony looking directly into the forest and hillock.",
    images: [
      {
        src: "/images/master-suite-1/18_Room 1_RajaGanesh Villa.jpg",
        alt: "Master suite one with king bed and warm interiors"
      },
      {
        src: "/images/master-suite-1/19_Room 1_RajaGanesh Villa.jpg",
        alt: "Master suite one alternate angle with balcony access"
      },
      {
        src: "/images/master-suite-1/20_Room 1_RajaGanesh Villa.jpg",
        alt: "Seating and layout details in master suite one"
      },
      {
        src: "/images/master-suite-1/21_Room 1_RajaGanesh Villa.jpg",
        alt: "Forest-facing perspective from master suite one"
      },
      {
        src: "/images/master-suite-1/35_Room 1 Bathroom_RajaGanesh Villa.jpg",
        alt: "Bathroom attached to master suite one"
      },
      {
        src: "/images/master-suite-2/22_Room 2_RajaGanesh Villa.jpg",
        alt: "Master suite two with king bed and natural light"
      },
      {
        src: "/images/master-suite-2/23_Room 2_RajaGanesh Villa.jpg",
        alt: "Master suite two layout and furnishing details"
      },
      {
        src: "/images/master-suite-2/24_Room 2_RajaGanesh Villa.jpg",
        alt: "Second master suite balcony-facing setup"
      },
      {
        src: "/images/master-suite-2/37_Room 2 Bathroom_RajaGanesh Villa.jpg",
        alt: "Bathroom attached to master suite two"
      }
    ]
  },
  {
    title: "The Study (The +0.5)",
    body: "Our secret weapon. A dedicated study room perfect for a quiet remote-work session or as an extra cozy nook for the kids.",
    images: [
      {
        src: "/images/study/4_Study Room_Rajaganesh Villa.jpg",
        alt: "Dedicated study room for work and reading"
      }
    ]
  },
  {
    title: "Living & Dining",
    body: "Double-height living spaces designed for slow mornings. A 6-seater dining area where the family actually gathers.",
    images: [
      {
        src: "/images/living-dining/10_Living Room_RajaGanesh Villa.jpg",
        alt: "Double-height living room at The Big Chill"
      },
      {
        src: "/images/living-dining/11_Living Room_RajaGanesh Villa.jpg",
        alt: "Living room with seating and large windows"
      },
      {
        src: "/images/living-dining/25_Corridor_RajaGanesh Villa.jpg",
        alt: "Quiet corridor connecting living spaces"
      },
      {
        src: "/images/living-dining/12_Living Room_RajaGanesh Villa.jpg",
        alt: "Living room corner for family lounging"
      },
      {
        src: "/images/living-dining/5_Living Room_RajaGanesh Villa.jpg",
        alt: "Wide-angle living room interior"
      },
      {
        src: "/images/living-dining/6_Living Room_RajaGanesh Villa.jpg",
        alt: "Living room detail shot"
      },
      {
        src: "/images/living-dining/7_Dining_RajaGanesh Villa.jpg",
        alt: "Six-seater dining area"
      },
      {
        src: "/images/living-dining/8_Dining_RajaGanesh Villa.jpg",
        alt: "Dining setup for shared meals"
      }
    ]
  },
  {
    title: "Exterior & Views",
    body: "Relax in the lawn, balcony, or simply unwind with the great views around The Big Chill.",
    images: [
      {
        src: "/images/exteriors/16_View from_RajaGanesh Villa.jpg",
        alt: "View from the villa exterior"
      },
      {
        src: "/images/exteriors/34_Balcony View_RajaGanesh Villa.jpg",
        alt: "Balcony view at The Big Chill"
      },
      {
        src: "/images/exteriors/40_Sunrise_RajaGanesh Villa.jpg",
        alt: "Sunrise view near the exterior lawn"
      },
      {
        src: "/images/exteriors/43_Sunrise_RajaGanesh Villa.jpg",
        alt: "Morning hill view from the villa"
      },
      {
        src: "/images/exteriors/48_Sitout_RajaGanesh Villa.jpg",
        alt: "Outdoor sitout area at The Big Chill"
      },
      {
        src: "/images/exteriors/71_Reading Corner_RajaGanesh Villa.jpg",
        alt: "Reading corner in the exterior zone"
      },
      {
        src: "/images/exteriors/75_Drone_RajaGanesh Villa.jpg",
        alt: "Drone view of The Big Chill exterior"
      },
      {
        src: "/images/exteriors/80_Drone_RajaGanesh Villa.jpg",
        alt: "Aerial exterior view with surrounding greenery"
      },
      {
        src: "/images/exteriors/84_Drone_RajaGanesh Villa.jpg",
        alt: "High-angle drone shot of property grounds"
      },
      {
        src: "/images/exteriors/WhatsApp Image 2026-04-22 at 11.39.02.jpeg",
        alt: "Evening exterior ambience at The Big Chill"
      },
      {
        src: "/images/exteriors/Jackfruit.jpg",
        alt: "Jackfruit tree and natural surroundings at the villa"
      }
    ]
  }
];

const foodImages = [
  {
    src: "/images/kitchen-food/50_Breakfast_RajaGanesh Villa.jpg",
    alt: "Fresh breakfast served at The Big Chill"
  },
  {
    src: "/images/kitchen-food/9_Kitchen_RajaGanesh Villa.jpg",
    alt: "Kitchen space at The Big Chill"
  },
  {
    src: "/images/kids-corner/59_Sandpit_RajaGanesh Villa.jpg",
    alt: "Kids sand pit in the play area"
  },
  {
    src: "/images/kids-corner/58_Badminton_RajaGanesh Villa.jpg",
    alt: "Outdoor badminton setup for guests"
  },
  {
    src: "/images/kids-corner/sandpit.JPG",
    alt: "Dedicated play corner for children"
  },
  {
    src: "/images/kids-corner/swing.JPG",
    alt: "Swing in the kids activity area"
  }
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
  {
    src: "/images/exteriors/34_Balcony View_RajaGanesh Villa.jpg",
    alt: "Exterior view of The Big Chill villa"
  },
  {
    src: "/images/exteriors/75_Drone_RajaGanesh Villa.jpg",
    alt: "Aerial view of The Big Chill in Wayanad"
  },
  {
    src: "/images/views-hillock/40_Sunrise_RajaGanesh Villa.jpg",
    alt: "Sunrise view from The Big Chill"
  },
  {
    src: "/images/living-dining/11_Living Room_RajaGanesh Villa.jpg",
    alt: "Living room interior at The Big Chill"
  },
  {
    src: "/images/master-suite-1/19_Room 1_RajaGanesh Villa.jpg",
    alt: "Master bedroom interior at The Big Chill"
  },
  {
    src: "/images/master-suite-2/23_Room 2_RajaGanesh Villa.jpg",
    alt: "Second bedroom interior at The Big Chill"
  },
  {
    src: "/images/kitchen-food/9_Kitchen_RajaGanesh Villa.jpg",
    alt: "Kitchen and meal preparation space"
  },
  {
    src: "/images/kids-corner/58_Badminton_RajaGanesh Villa.jpg",
    alt: "Recreation area for guests and kids"
  },
  {
    src: "/images/experiences-wayanad/banasura sagar dam.webp",
    alt: "Banasura Sagar Dam in Wayanad"
  },
  {
    src: "/images/experiences-wayanad/Chembra Peak.png",
    alt: "Chembra Peak trekking landscape"
  },
  {
    src: "/images/experiences-wayanad/edakkal caves.webp",
    alt: "Edakkal Caves attraction near Wayanad"
  },
  {
    src: "/images/experiences-wayanad/tholpetty-wildlife-sanctuary.jpg",
    alt: "Wayanad wildlife sanctuary experience"
  }
];

const faqs = [
  {
    question: "How many guests can The Big Chill host?",
    answer:
      "The villa is designed for up to 6 guests across two master suites and an additional study-nook style +0.5 room."
  },
  {
    question: "What food can guests expect?",
    answer:
      "Guests can enjoy home-style North Indian and South Indian meals. Breakfast is included, with lunch and dinner prepared on request."
  },
  {
    question: "Is The Big Chill suitable for families with kids?",
    answer:
      "Yes. Families often choose The Big Chill for the open spaces, sand pit, swing, and calm hill setting."
  },
  {
    question: "How can I enquire about dates and pricing?",
    answer:
      "Use the Contact section to call or email directly. You can also view the listing on StayVista as an additional reference."
  },
  {
    question: "What is the best time to visit The Big Chill?",
    answer:
      "You can visit throughout the year as the experiences are different in each season - summer, monsoon, and winter. Refer to the Nature & Seasons section above."
  },
  {
    question: "Can one book for longer duration staycation?",
    answer: "Please get in touch with us directly for the same."
  }
];

const testimonials = [
  {
    quote: "Superb views, amazing home cooked food and just a serene atmosphere.",
    guest: "Ankit Malik",
    source: "Google" as const
  },
  {
    quote: "Great experience, great host, great location.",
    guest: "Akanshu Arora",
    source: "Google" as const
  },
  {
    quote:
      "Best property visited in Wayanad. Caretaker of the property was very attentive and fast in his work. We will surely visit this property again.",
    guest: "Megha Prasad",
    source: "Google" as const
  },
  {
    quote: "Wonderful hill views, calm surroundings, and a home-like feeling through the stay.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "The space feels thoughtfully designed and very comfortable for families.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "Breakfast and in-house food made the stay even more relaxing.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "The lawn and outdoor areas were perfect for kids and evening downtime.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "Excellent host support and smooth experience from check-in to checkout.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "A peaceful retreat with clean rooms, great upkeep, and warm hospitality.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "Loved the serene location and the way nature surrounds the property.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "Comfortable stay for group travel with all essentials thoughtfully arranged.",
    guest: "Verified guest",
    source: "StayVista" as const
  },
  {
    quote: "Strongly recommend for a quiet Wayanad break with beautiful views.",
    guest: "Verified guest",
    source: "StayVista" as const
  }
];

const ratingSources = [
  {
    label: "Google Reviews",
    rating: 4.8,
    reviewCount: 35,
    href: "https://www.google.com/travel/hotels/entity/CgsI_5L9m4fLiqX3ARAB/reviews?q=the%20big%20chill%20wayanad&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C72958624%2C73059275%2C73064764%2C121529350&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaBAoCGgAqBAoAGgA&qs=CAE4Ag&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls"
  },
  {
    label: "StayVista",
    rating: 4.7,
    reviewCount: 51,
    href: "https://www.stayvista.com/villa/the-big-chill"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "The Big Chill",
  description:
    "A premium 2.5-bedroom hillock retreat in Wayanad for up to 6 guests.",
  url: "https://bigchillwayanad.com",
  image: heroImages.map((image) => image.src),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wayanad",
    addressRegion: "Kerala",
    addressCountry: "IN"
  },
  sameAs: ["https://www.stayvista.com/villa/the-big-chill"]
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <header className="hero">
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
          <div className="food-grid" aria-label="Food and family spaces">
            {foodImages.slice(0, 6).map((image) => (
              <figure className="food-item" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
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
              {
                src: "/images/experiences-wayanad/Chembra Peak.png",
                alt: "Chembra Peak trail in Wayanad"
              },
              {
                src: "/images/experiences-wayanad/lakkidi view point.jpg",
                alt: "View from Lakkidi viewpoint"
              },
              {
                src: "/images/experiences-wayanad/banasura sagar dam.webp",
                alt: "Banasura Sagar Dam landscape"
              },
              {
                src: "/images/experiences-wayanad/tholpetty-wildlife-sanctuary.jpg",
                alt: "Wildlife spotting near Wayanad sanctuary"
              },
              {
                src: "/images/experiences-wayanad/edakkal caves.webp",
                alt: "Edakkal Caves near Wayanad"
              },
              {
                src: "/images/experiences-wayanad/thirunelli-temple.jpg",
                alt: "Thirunelli Temple in Wayanad"
              }
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
            <figure className="gallery-item" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <TestimonialsSection
        testimonials={testimonials}
        ratingSources={ratingSources}
      />

      <section className="section container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact">
        <div className="contact-travel-layout">
          <article className="contact-box">
            <h2>Contact The Big Chill</h2>
            <p className="section-intro">
              Reach out directly for enquiries and trip planning.
            </p>
            <p className="contact-line">
              <span className="icon-badge" aria-hidden="true">
                ✉
              </span>
              <a href="mailto:thebigchill.wayanad@gmail.com">
                thebigchill.wayanad@gmail.com
              </a>
            </p>
            <p className="contact-line booking-link">
              <span className="icon-badge" aria-hidden="true">
                🛎
              </span>
              <span>
                For Bookings:{" "}
                <a
                  href="https://www.stayvista.com/villa/the-big-chill"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find us on StayVista
                </a>
              </span>
            </p>
          </article>

          <article className="contact-box travel-box">
            <h2>How To Get There</h2>
            <p className="section-intro">
              The Big Chill is near Mananthavady, Wayanad.{" "}
              <a
                href="https://maps.app.goo.gl/SKXcBdUBbDQwz7zU6"
                target="_blank"
                rel="noreferrer"
              >
                Open location in Google Maps
              </a>
              .
            </p>
            <iframe
              className="map-frame"
              title="Map near Mananthavady, Wayanad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Mananthavady%20Wayanad&t=&z=11&ie=UTF8&iwloc=&output=embed"
            />
            <div className="route-grid">
              <article className="route-card">
                <img
                  src="/images/location-nearby/nagerhole_wildlife.JPG"
                  alt="Wildlife route via Nagarhole from Bangalore"
                  loading="lazy"
                />
                <h3>Drive from Bangalore</h3>
                <p>
                  5-6 hours via Mysore and the Nagarhole Forest Reserve. Keep an eye
                  out for deer, elephants, monkeys, bears, and if you are lucky,
                  tigers.
                </p>
              </article>
              <article className="route-card">
                <img
                  src="/images/experiences-wayanad/lakkidi view point.jpg"
                  alt="Scenic mountain road route from Kannur or Kozhikode"
                  loading="lazy"
                />
                <h3>Fly + Road Transfer</h3>
                <p>
                  Fly into Kannur or Kozhikode, then drive 2.5-3 hours through scenic
                  mountain routes.
                </p>
              </article>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
