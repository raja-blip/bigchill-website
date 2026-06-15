import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Big Chill directly for dates, pricing, and trip planning in Wayanad. Call, email, or view the listing on StayVista."
};

export default function ContactPage() {
  return (
    <main className="container section">
      <div className="contact-travel-layout">
        <article className="contact-box">
          <h1>Contact The Big Chill</h1>
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
    </main>
  );
}
