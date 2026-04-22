"use client";

import { FormEvent, useState } from "react";

const recipientEmail = "thebigchill.wayanad@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Message to The Big Chill Wayanad";
    const body = `Name: ${name}\nContact Number: ${phone}\n\nMessage:\n${message}`;
    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input
        id="contact-name"
        name="name"
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="contact-number">Contact Number</label>
      <input
        id="contact-number"
        name="contactNumber"
        type="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <label htmlFor="contact-message">Message to The Big Chill Wayanad</label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
    </form>
  );
}
