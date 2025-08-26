import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Skeleton from 'react-loading-skeleton';
import { FaHeartbeat, FaBed, FaSadTear, FaWalking, FaHeart } from 'react-icons/fa';

interface MonitoringData {
  sessions: {
    date: string;
    anxietyLevel: number;
    sleepHours: number;
    depressionLevel: number;
    heartRate: number;
    steps: number;
  }[];
  mood: string;
  activity: string;
}

const fetchMonitoringDetails = async (): Promise<MonitoringData> => {
  // For production: Uncomment this and remove the mock below
  // const { data } = await axios.get<MonitoringData>('/api/monitoring/details');
  // return data;

  // Mock data for development (with delay to simulate loading)
  return new Promise<MonitoringData>((resolve) => {
    setTimeout(() => {
      resolve({
        sessions: [
          { date: '2025-08-15', anxietyLevel: 50, sleepHours: 7.5, depressionLevel: 40, heartRate: 72, steps: 8000 },
          { date: '2025-08-16', anxietyLevel: 48, sleepHours: 6.8, depressionLevel: 42, heartRate: 75, steps: 7500 },
          { date: '2025-08-17', anxietyLevel: 52, sleepHours: 7.2, depressionLevel: 38, heartRate: 70, steps: 9000 },
          { date: '2025-08-18', anxietyLevel: 45, sleepHours: 8.0, depressionLevel: 35, heartRate: 68, steps: 8500 },
          { date: '2025-08-19', anxietyLevel: 55, sleepHours: 6.5, depressionLevel: 45, heartRate: 78, steps: 7000 },
          { date: '2025-08-20', anxietyLevel: 45, sleepHours: 7.0, depressionLevel: 40, heartRate: 72, steps: 8200 },
          { date: '2025-08-21', anxietyLevel: 56, sleepHours: 7.3, depressionLevel: 50, heartRate: 76, steps: 7800 },
          { date: '2025-08-22', anxietyLevel: 37, sleepHours: 8.2, depressionLevel: 30, heartRate: 65, steps: 9500 },
          { date: '2025-08-23', anxietyLevel: 51, sleepHours: 6.9, depressionLevel: 48, heartRate: 74, steps: 7600 },
          { date: '2025-08-24', anxietyLevel: 52, sleepHours: 7.1, depressionLevel: 45, heartRate: 73, steps: 8100 },
          { date: '2025-08-25', anxietyLevel: 39, sleepHours: 7.8, depressionLevel: 35, heartRate: 69, steps: 9200 },
        ],
        mood: 'Stable',
        activity: 'Moderate',
      });
    }, 2000); // 2-second delay to demo loading state
  });
};

const Monitoring = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useQuery<MonitoringData>({
    queryKey: ['monitoringDetails'],
    queryFn: fetchMonitoringDetails,
  });

  const chartConfig = [
    {
      title: 'Anxiety Levels Over Sessions',
      dataKey: 'anxietyLevel',
      stroke: '#8884d8',
      icon: <span className="text-blue-500"><FaHeartbeat /></span>,
      yDomain: [0, 100],
    },
    {
      title: 'Sleep Hours Over Sessions',
      dataKey: 'sleepHours',
      stroke: '#82ca9d',
      icon: <span className="text-green-500"><FaBed /></span>,
      yDomain: [0, 12],
    },
    {
      title: 'Depression Levels Over Sessions',
      dataKey: 'depressionLevel',
      stroke: '#ffc658',
      icon: <span className="text-yellow-500"><FaSadTear /></span>,
      yDomain: [0, 100],
    },
    {
      title: 'Heart Rate Over Sessions',
      dataKey: 'heartRate',
      stroke: '#ff7300',
      icon: <span className="text-red-500"><FaHeart /></span>,
      yDomain: [50, 100],
    },
    {
      title: 'Daily Steps Over Sessions',
      dataKey: 'steps',
      stroke: '#00C49F',
      icon: <span className="text-teal-500"><FaWalking /></span>,
      yDomain: [0, 15000],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10 flex items-center justify-center md:justify-start">
          <span className="mr-3 text-blue-600 dark:text-blue-400 text-5xl"><FaHeartbeat /></span> Overall Monitoring Profile
        </h1>
        {error && <p className="text-red-500 mb-6 text-center">Error loading data: {error.message}</p>}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Skeleton height={400} className="rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Summary</h2>
              <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
                <p className="text-xl flex items-center">
                  <span className="mr-2 text-green-600 dark:text-green-400">Mood:</span> {data?.mood}
                </p>
                <p className="text-xl flex items-center">
                  <span className="mr-2 text-purple-600 dark:text-purple-400">Activity Level:</span> {data?.activity}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chartConfig.map((config, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {config.icon}
                    <h2 className="text-xl font-semibold ml-2">{config.title}</h2>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data?.sessions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={70} />
                      <YAxis domain={config.yDomain} />
                      <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff', border: '1px solid #ccc', borderRadius: '4px' }} />
                      <Legend />
                      <Line type="monotone" dataKey={config.dataKey} stroke={config.stroke} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Monitoring;