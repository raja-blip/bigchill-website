import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find The Big Chill in Wayanad, Kerala. Discover nearby landmarks, wildlife zones, and directions for your stay."
};

export default function LocationPage() {
  return (
    <main className="container section">
      <h1>Location</h1>
      <p className="section-intro">
        The Big Chill is located in Wayanad, Kerala, with easy access to hill trails,
        plantations, and major local attractions.
      </p>
      <div className="card">
        <p>
          For privacy, exact pin and directions are usually shared during enquiry
          confirmation.
        </p>
        <p>
          Nearby references include Banasura Sagar Dam, Wayanad wildlife regions,
          Chembra Peak, and Thirunelli routes.
        </p>
      </div>
    </main>
  );
}
