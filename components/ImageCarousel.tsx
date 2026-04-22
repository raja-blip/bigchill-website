"use client";

import Image from "next/image";
import { TouchEvent, useState } from "react";

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
  const isFirstSlide = index === 0;
  const shouldEagerLoad = variant === "hero" || isFirstSlide;

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
        <Image
          key={`${activeImage.src}-${index}`}
          src={activeImage.src}
          alt={activeImage.alt || title}
          width={1600}
          height={1000}
          sizes={variant === "hero" ? "(max-width: 960px) 100vw, 1120px" : "(max-width: 960px) 100vw, 50vw"}
          unoptimized
          priority={variant === "hero" && isFirstSlide}
          fetchPriority={variant === "hero" ? "high" : shouldEagerLoad ? "auto" : "low"}
          loading={shouldEagerLoad ? "eager" : "lazy"}
          className="carousel-image"
        />
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
