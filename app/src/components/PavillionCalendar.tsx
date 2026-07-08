import { useMemo, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pavillionEvents } from '../data/pavillion';

const monthKeys = [...new Set(pavillionEvents.map((event) => event.date.slice(0, 7)))].sort();
const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const currentMonthKey = new Date().toISOString().slice(0, 7);
const defaultMonthIndex = Math.max(
  0,
  monthKeys.includes(currentMonthKey) ? monthKeys.indexOf(currentMonthKey) : monthKeys.length - 1,
);

const getMonthLabel = (monthKey: string, format: 'long' | 'short' = 'long') => {
  const [year, month] = monthKey.split('-').map(Number);

  return new Date(year, month - 1, 1).toLocaleDateString('en-MY', {
    month: format,
    year: format === 'long' ? 'numeric' : undefined,
  });
};

const scrollToEvent = (slug: string) => {
  document
    .getElementById(`event-${slug}`)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default function PavillionCalendar() {
  const [monthIndex, setMonthIndex] = useState(defaultMonthIndex);
  const monthKey = monthKeys[monthIndex];
  const [year, month] = monthKey.split('-').map(Number);
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const monthEvents = useMemo(
    () => pavillionEvents.filter((event) => event.date.startsWith(monthKey)),
    [monthKey],
  );

  const eventsByDay = useMemo(() => {
    return monthEvents.reduce<Record<number, typeof pavillionEvents>>((groups, event) => {
      const day = Number(event.date.slice(-2));
      groups[day] = [...(groups[day] ?? []), event];
      return groups;
    }, {});
  }, [monthEvents]);

  const monthLabel = getMonthLabel(monthKey);
  const calendarCells: ReactNode[] = [];

  for (let blank = 0; blank < firstWeekday; blank += 1) {
    calendarCells.push(<span className="pavillion-calendar-empty" key={`empty-${blank}`} />);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const events = eventsByDay[day] ?? [];

    if (events.length === 0) {
      calendarCells.push(<span className="pavillion-calendar-day" key={day}>{day}</span>);
      continue;
    }

    calendarCells.push(
      <button
        type="button"
        className="pavillion-calendar-day has-event"
        key={day}
        aria-label={`${events.map((event) => event.title).join(', ')} on ${day} ${monthLabel}`}
        title={events.map((event) => event.title).join(', ')}
        onClick={() => scrollToEvent(events[0].slug)}
      >
        {day}
        <span aria-hidden="true" />
      </button>,
    );
  }

  return (
    <aside className="pavillion-calendar" aria-label="Pavillion event calendar">
      <p className="pavillion-kicker">EVENT CALENDAR</p>

      <div className="pavillion-calendar-months" aria-label="Months containing event posts">
        {monthKeys.map((key, index) => {
          const eventCount = pavillionEvents.filter((event) => event.date.startsWith(key)).length;

          return (
            <button
              type="button"
              className={index === monthIndex ? 'active' : ''}
              key={key}
              aria-pressed={index === monthIndex}
              onClick={() => setMonthIndex(index)}
            >
              <span>{getMonthLabel(key, 'short')}</span>
              <strong>{eventCount}</strong>
            </button>
          );
        })}
      </div>

      <div className="pavillion-calendar-header">
        <button
          type="button"
          aria-label="Previous event month"
          disabled={monthIndex === 0}
          onClick={() => setMonthIndex((current) => current - 1)}
        >
          <ChevronLeft size={17} />
        </button>
        <strong>{monthLabel}</strong>
        <button
          type="button"
          aria-label="Next event month"
          disabled={monthIndex === monthKeys.length - 1}
          onClick={() => setMonthIndex((current) => current + 1)}
        >
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="pavillion-calendar-weekdays" aria-hidden="true">
        {weekdayLabels.map((label, index) => <span key={`${label}-${index}`}>{label}</span>)}
      </div>

      <div className="pavillion-calendar-grid">{calendarCells}</div>

      <div className="pavillion-calendar-events" aria-label={`Events in ${monthLabel}`}>
        <p>{monthEvents.length} {monthEvents.length === 1 ? 'post' : 'posts'} this month</p>
        {monthEvents.map((event) => (
          <button type="button" key={event.slug} onClick={() => scrollToEvent(event.slug)}>
            <span>{Number(event.date.slice(-2))}</span>
            <strong>{event.title}</strong>
          </button>
        ))}
      </div>
    </aside>
  );
}

