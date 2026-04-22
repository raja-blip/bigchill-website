import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Big Chill directly for dates, pricing, and trip planning in Wayanad. Call, email, or view the listing on StayVista."
};

export default function ContactPage() {
  return (
    <main className="container section">
      <h1>Contact The Big Chill</h1>
      <p className="section-intro">
        Reach out directly for availability, rates, and planning your stay.
      </p>
      <div className="contact-box">
        <p>
          Email:{" "}
          <a href="mailto:thebigchill.wayanad@gmail.com">
            thebigchill.wayanad@gmail.com
          </a>
        </p>
        <ContactForm />
        <p className="small booking-link">
          For Bookings:{" "}
          <a
            href="https://www.stayvista.com/villa/the-big-chill"
            target="_blank"
            rel="noreferrer"
          >
            Find us on StayVista
          </a>
        </p>
      </div>
    </main>
  );
}
