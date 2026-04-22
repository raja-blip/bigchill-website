"use client";

import { TouchEvent, useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  guest: string;
  source: "Google" | "StayVista";
};

type RatingSource = {
  label: string;
  rating: number;
  reviewCount: number;
  href: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  ratingSources: RatingSource[];
};

const AUTO_ADVANCE_MS = 10000;
const SWIPE_THRESHOLD = 40;
const STAR_MAX = 5;

function shuffle<T>(items: T[]) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[randomIndex]] = [clone[randomIndex], clone[i]];
  }
  return clone;
}

function dedupeTestimonials(items: Testimonial[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${item.source}::${item.guest.trim().toLowerCase()}::${item.quote
      .trim()
      .toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function TestimonialsSection({
  testimonials,
  ratingSources
}: TestimonialsSectionProps) {
  const selectedTestimonials = useMemo(() => {
    const uniqueTestimonials = dedupeTestimonials(testimonials);
    return shuffle(uniqueTestimonials).slice(0, 10);
  }, [testimonials]);
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = selectedTestimonials.length;

  useEffect(() => {
    if (total <= 1) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(interval);
  }, [total]);

  useEffect(() => {
    if (index > total - 1) setIndex(0);
  }, [index, total]);

  if (total === 0) return null;

  const goPrev = () => setIndex((current) => (current - 1 + total) % total);
  const goNext = () => setIndex((current) => (current + 1) % total);
  const active = selectedTestimonials[index];

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (deltaX > SWIPE_THRESHOLD) goPrev();
    if (deltaX < -SWIPE_THRESHOLD) goNext();
    setTouchStartX(null);
  };

  const getStars = (rating: number) => {
    const fullStars = Math.round(rating);
    return "★".repeat(fullStars).padEnd(STAR_MAX, "☆");
  };

  return (
    <section className="section container testimonials-section" aria-label="Guest reviews">
      <div className="testimonials-layout">
        <article className="card testimonial-card">
          <h2>What Guests Say</h2>
          <p className="section-intro">
            Real guest snippets from Google and StayVista.
          </p>
          <div
            className="testimonial-carousel"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <p className="testimonial-quote">"{active.quote}"</p>
            <p className="testimonial-guest">
              {active.guest} <span className="testimonial-source">({active.source})</span>
            </p>
            {total > 1 && (
              <>
                <button
                  type="button"
                  className="carousel-nav carousel-prev"
                  aria-label="Previous testimonial"
                  onClick={goPrev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="carousel-nav carousel-next"
                  aria-label="Next testimonial"
                  onClick={goNext}
                >
                  ›
                </button>
                <div className="carousel-dots" aria-hidden="true">
                  {selectedTestimonials.map((testimonial, dotIndex) => (
                    <button
                      key={`${testimonial.source}-${testimonial.guest}-${dotIndex}`}
                      type="button"
                      className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
                      onClick={() => setIndex(dotIndex)}
                      aria-label={`Go to testimonial ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </article>

        <aside className="rating-summary" aria-label="Average ratings">
          {ratingSources.map((source) => (
            <article className="card rating-card" key={source.label}>
              <p className="rating-label">{source.label}</p>
              <p className="rating-stars" aria-label={`${source.rating} out of 5 stars`}>
                {getStars(source.rating)}
              </p>
              <p className="rating-number">
                {source.rating.toFixed(1)} / 5 ({source.reviewCount} reviews)
              </p>
              <a href={source.href} target="_blank" rel="noreferrer">
                Read all reviews
              </a>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
