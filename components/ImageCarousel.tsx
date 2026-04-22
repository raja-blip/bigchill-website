"use client";

import { TouchEvent, useMemo, useState } from "react";

type ImageCarouselProps = {
  images: Array<{ src: string; alt: string }>;
  title: string;
  variant?: "hero" | "section";
};

export default function ImageCarousel({
  images,
  title,
  variant = "section"
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = images.length;

  if (total === 0) return null;

  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);
  const activeImage = images[index];

  const nextImage = useMemo(() => images[(index + 1) % total], [images, index, total]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - touchStartX;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) prev();
    if (deltaX < -swipeThreshold) next();

    setTouchStartX(null);
  };

  return (
    <div
      className={`carousel carousel-${variant}`}
      aria-label={title}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <figure className="carousel-frame">
        <img
          key={`${activeImage.src}-${index}`}
          src={activeImage.src}
          alt={activeImage.alt || title}
          loading={variant === "hero" ? "eager" : "lazy"}
          decoding="async"
        />
      </figure>

      {/* Preload upcoming image to reduce perceived "stuck" transitions */}
      {total > 1 ? <img src={nextImage.src} alt="" className="carousel-preload" /> : null}

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
                key={image.src}
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
