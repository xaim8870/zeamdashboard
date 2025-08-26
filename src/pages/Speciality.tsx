import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { FaUserMd } from 'react-icons/fa';

const fetchSpecialtyData = async () => {
  const { data } = await axios.get('/api/specialty');
  return data; // Example: { items: [{ type: 'Nutrition', status: 'Balanced' }] }
};

const Specialty = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ['specialty'],
    queryFn: fetchSpecialtyData,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaUserMd className="mr-2 text-teal-600 dark:text-teal-400" /> Specialty Treatment Data
        </h1>
        {error && <p className="text-red-500 mb-4">Error loading data: {error.message}</p>}
        {isLoading ? (
          <Skeleton count={3} height={100} className="mb-4" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.items?.map((item: { type: string; status: string; details: string }, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-lg font-semibold mb-2">{item.type}</h2>
                <p>Status: {item.status}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
              </div>
            )) || <p>No specialty data available.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Specialty;