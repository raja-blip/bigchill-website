import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Things To Do In Wayanad",
  description:
    "Plan your trip from The Big Chill with nearby attractions including Banasura Sagar Dam, Chembra Peak, wildlife spots, and local nature trails."
};

const places = [
  "Step outside for coffee and pepper plantation walks.",
  "Visit Banasura Sagar Dam for panoramic views and boating.",
  "Trek Chembra Peak for one of Wayanad's iconic hill experiences.",
  "Explore Edakkal Caves and local heritage landmarks.",
  "Plan wildlife sightings near Wayanad sanctuary zones."
];

export default function ThingsToDoPage() {
  return (
    <main className="container section">
      <h1>Things To Do In Wayanad</h1>
      <p className="section-intro">
        The Big Chill is a calm base for nature-led days, short drives, and slow
        evenings back at the villa.
      </p>
      <div className="card">
        <ul>
          {places.map((place) => (
            <li key={place}>{place}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
