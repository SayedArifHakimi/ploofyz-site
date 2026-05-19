/**
 * @author Sayed Arif Hakimi
 * @description Ploofyz Pavillion archive page
 */

import { Link } from 'react-router-dom';
import './Pavillion.css';
// Fallback inline event data to avoid build error when the external event module
// is missing. Replace with an actual import when the module/file is available.
import { videoContest02May2026 } from '../data/pavillion/events/2026-05-02-video-contest';
import { bingoNight16May2026 } from '../data/pavillion/events/2026-05-16-bingo-night';
import { bingoNight23May2026 } from '../data/pavillion/events/2026-05-23-bingo-night';

export default function Pavillion() {
  return (
    <div className="pavillion-page">
      {/* hero section */}
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
        <div className="pavillion-archive-shell">
          <div className="pavillion-section-heading">
            <p className="pavillion-kicker">ARCHIVE LIST</p>
            <h2>Memories by Date</h2>
            <p>Select an event date to view the full post, winners, images, and details.</p>
          </div>

          {/*<div className="pavillion-month-list">
            {Object.entries(groupedEvents).map(([month, events]) => (
              <div className="pavillion-month" key={month}>
                <h3>{month}</h3>

                <div className="pavillion-event-list">
                  {events.map((event) => (
                    <Link
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
              </div>
            ))}
          </div>*/}
          

          {/* Month May 2026 */}  <br /> 
          <div className="pavillion-month-list">
            <div className="pavillion-month">
                <h3>MAY 2026</h3>
                
                {/* Bingo Night 23 May */}
                <div className="pavillion-event-list">

                  <Link
                    className="pavillion-event-row"
                    key={bingoNight23May2026.slug}
                    to={`/pavillion/${bingoNight23May2026.slug}`}
                    >
                      
                    <span className="pavillion-event-date">{bingoNight23May2026.dateLabel}</span>

                    <div className="pavillion-event-info">
                      <h4>{bingoNight23May2026.title}</h4>
                      <p>{bingoNight23May2026.shortDescription}</p>
                    </div>

                    {/*<span className="pavillion-event-arrow">View →</span> */}
                    </Link>

                </div>

                {/* Bingo Night 16 May */}
                <div className="pavillion-event-list">
                  <Link
                    className="pavillion-event-row"
                    key={bingoNight16May2026.slug}
                    to={`/pavillion/${bingoNight16May2026.slug}`}
                    >
                      
                    <span className="pavillion-event-date">{bingoNight16May2026.dateLabel}</span>

                    <div className="pavillion-event-info">
                      <h4>{bingoNight16May2026.title}</h4>
                      <p>{bingoNight16May2026.shortDescription}</p>
                    </div>

                    <span className="pavillion-event-arrow">View →</span>
                    </Link>

                </div>

                {/* Video Contest 2 May*/}
                <div className="pavillion-event-list">

                  <Link
                    className="pavillion-event-row"
                    key={videoContest02May2026.slug}
                    to={`/pavillion/${videoContest02May2026.slug}`}
                    >
                      
                    <span className="pavillion-event-date">{videoContest02May2026.dateLabel}</span>

                    <div className="pavillion-event-info">
                      <h4>{videoContest02May2026.title}</h4>
                      <p>{videoContest02May2026.shortDescription}</p>
                    </div>

                    <span className="pavillion-event-arrow">View →</span>
                    </Link>

                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}