import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { FaBrain } from 'react-icons/fa';

const fetchEvents = async () => {
  const { data } = await axios.get('/api/events');
  return data; // Example: { events: [{ id: 1, description: 'Signal Breach', timestamp: '2025-08-21' }] }
};

const Events = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaBrain className="mr-2 text-red-600 dark:text-red-400" /> Identified Events
        </h1>
        {error && <p className="text-red-500 mb-4">Error loading events: {error.message}</p>}
        {isLoading ? (
          <Skeleton count={5} height={50} className="mb-4" />
        ) : (
          <ul className="space-y-4">
            {data?.events?.map((event: { id: number; description: string; timestamp: string }) => (
              <li key={event.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <p className="font-semibold">{event.description}</p>
                <p className="text-gray-600 dark:text-gray-300">{event.timestamp}</p>
              </li>
            )) || <p>No events found.</p>}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Events;