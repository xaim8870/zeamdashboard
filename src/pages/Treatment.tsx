import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Skeleton from 'react-loading-skeleton';
import { FaNotesMedical } from 'react-icons/fa';

const fetchTreatmentData = async () => {
  const { data } = await axios.get('/api/treatment');
  return data; // Example: { progress: [{ session: 1, effectiveness: 85 }] }
};

const Treatment = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ['treatment'],
    queryFn: fetchTreatmentData,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaNotesMedical className="mr-2 text-purple-600 dark:text-purple-400" /> Treatment Response Data
        </h1>
        {error && <p className="text-red-500 mb-4">Error loading data: {error.message}</p>}
        {isLoading ? (
          <Skeleton height={400} className="mb-8" />
        ) : (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Treatment Effectiveness</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data?.progress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="effectiveness" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4">Current Status: {data?.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Treatment;