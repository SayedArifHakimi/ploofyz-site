/**
 * @author Sayed Arif Hakimi
 * @description Ploofyz Pavillion archive page
 */

import { Link } from 'react-router-dom';
import PavillionCalendar from '../components/PavillionCalendar';
import { getPavillionEventsByMonth } from '../data/pavillion';
import './Pavillion.css';

export default function Pavillion() {
  const groupedEvents = getPavillionEventsByMonth();

  return (
    <div className="pavillion-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Ploofyz Archive
            </span>
          </div>
          <h1 className="page-hero-title">
            <span className="gradient-text">Ploofyz Pavillion</span>
          </h1>
          <p className="page-hero-subtitle">
            Archive of our events, appreciation posts, winners, and special occasions.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full"
              style={{ background: '#ef4444', color: '#fff', boxShadow: '0 0 20px rgba(239,68,68,0.4)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
          </div>
        </div>
      </section>

      <section className="pavillion-archive-section">
        <div className="pavillion-archive-layout">
          <PavillionCalendar />

          <div className="pavillion-archive-shell">
            <div className="pavillion-section-heading">
              <p className="pavillion-kicker">ARCHIVE LIST</p>
              <h2>Memories by Date</h2>
              <p>Select an event date to view the full post, winners, images, and details.</p>
            </div>

            <div className="pavillion-month-list">
              {Object.entries(groupedEvents).map(([month, events]) => (
                <section className="pavillion-month" key={month}>
                  <h3>{month}</h3>

                  <div className="pavillion-event-list">
                    {events.map((event) => (
                      <Link
                        id={`event-${event.slug}`}
                        className="pavillion-event-row"
                        key={event.slug}
                        to={`/pavillion/${event.slug}`}
                      >
                        <span className="pavillion-event-date">{event.dateLabel}</span>

                        <div className="pavillion-event-info">
                          <h4>{event.title}</h4>
                          <p>{event.shortDescription}</p>
                        </div>

                        <span className="pavillion-event-arrow">View →</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

