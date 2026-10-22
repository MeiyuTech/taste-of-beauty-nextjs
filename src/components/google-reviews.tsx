"use client";

import { useEffect, useRef, useState } from "react";
import reviews from "@/lib/google-reviews.json";
import InternalLink from "./internal-link";
import "./google-reviews.css";

type Review = (typeof reviews)[number];
const googleReviewsUrl = reviews[0].sourceUrl;

function ReviewHeader({ review, titleId }: { review: Review; titleId?: string }) {
  return (
    <>
      <div className="review-card-header">
        <img className="review-avatar" src={review.avatar} alt="" width="40" height="40" loading="lazy" />
        <div className="review-author">
          <h3 id={titleId}>{review.name}</h3>
          <time dateTime={review.date}>{review.dateLabel}</time>
        </div>
        <img className="review-google-logo" src="/images/reviews/google.svg" alt="Google" width="20" height="20" loading="lazy" />
      </div>
      <div className="review-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        <span aria-hidden="true">★★★★★</span>
      </div>
    </>
  );
}

export default function GoogleReviews({ bookingHref = "/#booking", heading, eyebrow = "SELECTED 5-STAR GOOGLE REVIEWS" }: { bookingHref?: string; heading?: string; eyebrow?: string } = {}) {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [selected, setSelected] = useState<Review | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({
      start: element.scrollLeft < 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    if (!selected || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function move(direction: number) {
    const element = track.current;
    const card = element?.firstElementChild;
    if (!element || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(element).columnGap);
    element.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function openReview(review: Review) {
    setPhotoIndex(0);
    setSelected(review);
  }

  return (
    <section className="google-reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="google-reviews-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="reviews-title">{heading ?? <>Why customers <em>love us.</em></>}</h2>
      </div>
      <div className="google-reviews-stage">
        <div
          className="review-track"
          id="review-track"
          ref={track}
          tabIndex={0}
          role="region"
          aria-label="Customer reviews. Use the left and right arrow keys to browse."
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              move(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <ReviewHeader review={review} />
              <div className="review-card-content">
                <p>{review.text}</p>
                {review.photos.length > 0 && (
                  <button
                    type="button"
                    className="review-photo-preview"
                    aria-label={`View ${review.photos.length} photos from ${review.name}`}
                    onClick={() => openReview(review)}
                  >
                    <img src={review.photos[0]} alt={`Dining photo shared by ${review.name}`} width="80" height="80" loading="lazy" />
                    {review.photos.length > 1 && <span>+{review.photos.length - 1}</span>}
                  </button>
                )}
              </div>
              <button type="button" className="review-read-more" onClick={() => openReview(review)} aria-label={`Read full review by ${review.name}`}>
                Read more
              </button>
            </article>
          ))}
        </div>
        <button type="button" className="review-arrow review-arrow-prev" aria-label="Previous review" aria-controls="review-track" disabled={edges.start} onClick={() => move(-1)}>
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" className="review-arrow review-arrow-next" aria-label="Next review" aria-controls="review-track" disabled={edges.end} onClick={() => move(1)}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="google-reviews-actions">
        <a className="google-reviews-link" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
          Read all reviews on Google
        </a>
        <InternalLink className="cta" href={bookingHref}>Reserve a table</InternalLink>
      </div>
      <dialog
        ref={dialog}
        className="review-dialog"
        aria-labelledby="review-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {selected && (
          <div className="review-dialog-content">
            <button type="button" className="review-dialog-close" aria-label="Close review" onClick={() => dialog.current?.close()} autoFocus>
              <span aria-hidden="true">×</span>
            </button>
            <ReviewHeader review={selected} titleId="review-dialog-title" />
            <p className="review-full-text">{selected.text}</p>
            {selected.photos.length > 0 && (
              <div className="review-gallery">
                <img className="review-gallery-main" src={selected.photos[photoIndex]} alt={`Photo ${photoIndex + 1} of ${selected.photos.length} shared by ${selected.name}`} />
                {selected.photos.length > 1 && (
                  <div className="review-gallery-thumbnails" aria-label="Review photos">
                    {selected.photos.map((photo, index) => (
                      <button type="button" key={photo} aria-label={`Show photo ${index + 1}`} aria-pressed={index === photoIndex} onClick={() => setPhotoIndex(index)}>
                        <img src={photo} alt="" width="56" height="56" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            <a className="google-reviews-link" href={selected.sourceUrl} target="_blank" rel="noopener noreferrer">View restaurant on Google</a>
          </div>
        )}
      </dialog>
    </section>
  );
}
