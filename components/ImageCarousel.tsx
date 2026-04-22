"use client";

import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
  title: string;
  variant?: "hero" | "section";
};

export default function ImageCarousel({
  images,
  title,
  variant = "section"
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  if (total === 0) return null;

  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <div className={`carousel carousel-${variant}`} aria-label={title}>
      <figure className="carousel-frame">
        <img src={images[index]} alt={title} loading={variant === "hero" ? "eager" : "lazy"} />
      </figure>

      {total > 1 && (
        <>
          <button
            type="button"
            className="carousel-nav carousel-prev"
            aria-label={`Previous ${title} image`}
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-nav carousel-next"
            aria-label={`Next ${title} image`}
            onClick={next}
          >
            ›
          </button>

          <div className="carousel-dots" aria-hidden="true">
            {images.map((image, dotIndex) => (
              <button
                key={image}
                type="button"
                className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to image ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
