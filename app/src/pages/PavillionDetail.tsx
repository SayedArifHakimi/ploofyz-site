/**
 * @author Sayed Arif Hakimi
 * @description Ploofyz Pavillion detail page
 */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPavillionEventBySlug } from '../data/pavillion';
import './Pavillion.css';

const getTikTokVideoId = (url: string) => {
  return url.match(/video\/(\d+)/)?.[1];
};

export default function PavillionDetail() {
  const { slug } = useParams();
  const event = getPavillionEventBySlug(slug || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTikTokIndex, setActiveTikTokIndex] = useState(0);
  
  useEffect(() => {
    if (!event || event.images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) =>
        current === event.images.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [event]);

  useEffect(() => {
    if (!event?.tiktokVideos?.length) return;

    const oldScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    oldScript?.remove();

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [event?.slug, activeTikTokIndex]);

  if (!event) {
    return (
      <div className="pavillion-page">
        <section className="pavillion-detail-section">
          <div className="pavillion-detail-shell">
            <Link className="pavillion-back-link" to="/pavillion">
              ← Back to Pavillion
            </Link>

            <div className="pavillion-detail-card">
              <p className="pavillion-kicker">NOT FOUND</p>
              <h1>Event Not Found</h1>
              <p className="pavillion-detail-description">
                This Pavillion entry does not exist or may have been moved.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pavillion-page">
      <section className="pavillion-detail-section">
        <div className="pavillion-detail-shell">
          <Link className="pavillion-back-link" to="/pavillion">
            ← Back to Pavillion
          </Link>

          <div className="pavillion-detail-card">
            <p className="pavillion-kicker">{event.category.toUpperCase()}</p>

            <h1>{event.title}</h1>

            <div className="pavillion-detail-meta">
              <span>Updated on {event.dateLabel} by {event.updatedBy}</span>
            </div>

            <p className="pavillion-detail-description">{event.description}</p>
          </div>

          

          {/*<div className="pavillion-image-list">
            {event.images.map((image) => (
              <figure className="pavillion-image-card" key={image.src}>
                {image.caption && <figcaption>{image.caption}</figcaption>}
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>*/}
          
          
          {/* short paragraph */}
          <p className="pavillion-detail-article">
            {event.article}
          </p>

          {event.images.length > 0 && (
            <section className="pavillion-carousel">
              <div className="pavillion-carousel-header">
                <div>
                  <p className="pavillion-kicker">EVENT GALLERY</p>
                </div>

                <span>
                  {activeImageIndex + 1} / {event.images.length}
                </span>
              </div>

              <figure
                className="pavillion-carousel-main clickable"
                onClick={() =>
                  setActiveImageIndex((current) =>
                    current === event.images.length - 1 ? 0 : current + 1
                  )
                }
                title="Click to view next image"
              >
                {event.images[activeImageIndex].caption && (
                  <figcaption key={event.images[activeImageIndex].caption}>
                    {event.images[activeImageIndex].caption}
                  </figcaption>
                )}

                <img
                  key={event.images[activeImageIndex].src}
                  className="pavillion-carousel-image"
                  src={event.images[activeImageIndex].src}
                  alt={event.images[activeImageIndex].alt}
                  loading="lazy"
                />
              </figure>

              {event.images.length > 1 && (
                <>
                  {/*<div className="pavillion-carousel-controls">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((current) =>
                          current === 0 ? event.images.length - 1 : current - 1
                        )
                      }
                    >
                      ← Previous
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((current) =>
                          current === event.images.length - 1 ? 0 : current + 1
                        )
                      }
                    >
                      Next →
                    </button>
                  </div>*/}

                  <div className="pavillion-carousel-thumbs">
                    {event.images.map((image, index) => (
                      <button
                        type="button"
                        className={index === activeImageIndex ? 'active' : ''}
                        key={image.src}
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          
          {event.tiktokVideos && event.tiktokVideos.length > 0 && (
            <section className="pavillion-tiktok-section">
              <div className="pavillion-tiktok-heading">
                <div>
                  <p className="pavillion-kicker">TIKTOK FEATURE</p>
                  <h2>Event Videos</h2>
                  <p>Watch the featured TikTok submissions from this event.</p>
                </div>

                <span>
                  {activeTikTokIndex + 1} / {event.tiktokVideos.length}
                </span>
              </div>

              <div
                className="pavillion-tiktok-main"
                onClick={() =>
                  setActiveTikTokIndex((current) =>
                    current === event.tiktokVideos!.length - 1 ? 0 : current + 1
                  )
                }
                title="Click to view next video"
              >
                <h3>{event.tiktokVideos[activeTikTokIndex].title}</h3>

                <blockquote
                  key={event.tiktokVideos[activeTikTokIndex].url}
                  className="tiktok-embed"
                  cite={event.tiktokVideos[activeTikTokIndex].url}
                  data-video-id={getTikTokVideoId(event.tiktokVideos[activeTikTokIndex].url)}
                >
                  <section>
                    <a
                      href={event.tiktokVideos[activeTikTokIndex].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Watch on TikTok
                    </a>
                  </section>
                </blockquote>
              </div>

              {event.tiktokVideos.length > 1 && (
                <div className="pavillion-tiktok-thumbs">
                  {event.tiktokVideos.map((video, index) => (
                    <button
                      type="button"
                      className={index === activeTikTokIndex ? 'active' : ''}
                      key={video.url}
                      onClick={() => setActiveTikTokIndex(index)}
                    >
                      <span>{index + 1}</span>
                      <strong>{video.title}</strong>
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

        </div>
      </section>
    </div>
  );
}