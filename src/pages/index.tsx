import Link from 'next/link';
import { getFeaturedEvents } from '../../dummy-data';
import EventList from '../components/events/eventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
