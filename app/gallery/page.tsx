import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of The Big Chill in Wayanad: villa exteriors, suites, views, food moments, and nearby experiences."
};

const galleryImages = [
  { src: "/images/exteriors/53_RajaGanesh Villa.jpg", alt: "Villa exterior daytime" },
  { src: "/images/exteriors/75_Drone_RajaGanesh Villa.jpg", alt: "Drone view of property" },
  { src: "/images/views-hillock/40_Sunrise_RajaGanesh Villa.jpg", alt: "Sunrise hillock view" },
  { src: "/images/master-suite-1/18_Room 1_RajaGanesh Villa.jpg", alt: "Master suite one bedroom" },
  { src: "/images/master-suite-2/22_Room 2_RajaGanesh Villa.jpg", alt: "Master suite two bedroom" },
  { src: "/images/living-dining/10_Living Room_RajaGanesh Villa.jpg", alt: "Double-height living room" },
  { src: "/images/living-dining/7_Dining_RajaGanesh Villa.jpg", alt: "Family dining area" },
  { src: "/images/study/4_Study Room_Rajaganesh Villa.jpg", alt: "Study room" },
  { src: "/images/kitchen-food/50_Breakfast_RajaGanesh Villa.jpg", alt: "Breakfast spread" },
  { src: "/images/kids-corner/59_Sandpit_RajaGanesh Villa.jpg", alt: "Kids sand pit area" },
  { src: "/images/experiences-wayanad/chembra peak.jpg", alt: "Chembra peak experience" },
  { src: "/images/experiences-wayanad/banasura sagar dam.webp", alt: "Banasura Sagar Dam" }
];

export default function GalleryPage() {
  return (
    <main className="container section">
      <h1>Gallery</h1>
      <p className="section-intro">
        A full visual walkthrough of The Big Chill and nearby Wayanad experiences.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <figure className="gallery-item" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </main>
  );
}
