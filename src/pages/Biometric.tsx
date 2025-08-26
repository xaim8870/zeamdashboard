import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Skeleton from 'react-loading-skeleton';
import { FaChartLine, FaHeartbeat, FaBed, FaWalking, FaBurn } from 'react-icons/fa';

interface BiometricData {
  metrics: {
    date: string;
    heartRate: number;
    sleepHours: number;
    steps: number;
    caloriesBurned: number;
  }[];
  averageSleep: number;
  averageHeartRate: number;
  averageSteps: number;
  averageCalories: number;
}

const fetchBiometricData = async (): Promise<BiometricData> => {
  // For production: Uncomment this and remove the mock below
  // const { data } = await axios.get<BiometricData>('/api/biometric');
  // return data;

  // Mock data for development (with delay to simulate loading)
  return new Promise<BiometricData>((resolve) => {
    setTimeout(() => {
      const metrics = [
        { date: '2025-08-15', heartRate: 72, sleepHours: 7.5, steps: 8000, caloriesBurned: 2500 },
        { date: '2025-08-16', heartRate: 75, sleepHours: 6.8, steps: 7500, caloriesBurned: 2400 },
        { date: '2025-08-17', heartRate: 70, sleepHours: 7.2, steps: 9000, caloriesBurned: 2600 },
        { date: '2025-08-18', heartRate: 68, sleepHours: 8.0, steps: 8500, caloriesBurned: 2550 },
        { date: '2025-08-19', heartRate: 78, sleepHours: 6.5, steps: 7000, caloriesBurned: 2300 },
        { date: '2025-08-20', heartRate: 72, sleepHours: 7.0, steps: 8200, caloriesBurned: 2450 },
        { date: '2025-08-21', heartRate: 76, sleepHours: 7.3, steps: 7800, caloriesBurned: 2480 },
        { date: '2025-08-22', heartRate: 65, sleepHours: 8.2, steps: 9500, caloriesBurned: 2700 },
        { date: '2025-08-23', heartRate: 74, sleepHours: 6.9, steps: 7600, caloriesBurned: 2420 },
        { date: '2025-08-24', heartRate: 73, sleepHours: 7.1, steps: 8100, caloriesBurned: 2500 },
        { date: '2025-08-25', heartRate: 69, sleepHours: 7.8, steps: 9200, caloriesBurned: 2650 },
      ];
      const averageSleep = metrics.reduce((sum, m) => sum + m.sleepHours, 0) / metrics.length;
      const averageHeartRate = metrics.reduce((sum, m) => sum + m.heartRate, 0) / metrics.length;
      const averageSteps = metrics.reduce((sum, m) => sum + m.steps, 0) / metrics.length;
      const averageCalories = metrics.reduce((sum, m) => sum + m.caloriesBurned, 0) / metrics.length;
      resolve({
        metrics,
        averageSleep: parseFloat(averageSleep.toFixed(1)),
        averageHeartRate: Math.round(averageHeartRate),
        averageSteps: Math.round(averageSteps),
        averageCalories: Math.round(averageCalories),
      });
    }, 2000); // 2-second delay to demo loading state
  });
};

const Biometric = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useQuery<BiometricData>({
    queryKey: ['biometric'],
    queryFn: fetchBiometricData,
  });

  const chartConfig = [
    {
      title: 'Heart Rate Trends',
      dataKey: 'heartRate',
      stroke: '#ff7300',
      fill: '#ff7300',
      icon: <span className="text-red-500"><FaHeartbeat /></span>,
      yDomain: [50, 100],
      summary: `Average: ${data?.averageHeartRate} bpm`,
    },
    {
      title: 'Sleep Hours Trends',
      dataKey: 'sleepHours',
      stroke: '#82ca9d',
      fill: '#82ca9d',
      icon: <span className="text-green-500"><FaBed /></span>,
      yDomain: [0, 12],
      summary: `Average: ${data?.averageSleep} hours`,
    },
    {
      title: 'Daily Steps Trends',
      dataKey: 'steps',
      stroke: '#00C49F',
      fill: '#00C49F',
      icon: <span className="text-teal-500"><FaWalking /></span>,
      yDomain: [0, 15000],
      summary: `Average: ${data?.averageSteps} steps`,
    },
    {
      title: 'Calories Burned Trends',
      dataKey: 'caloriesBurned',
      stroke: '#ffc658',
      fill: '#ffc658',
      icon: <span className="text-yellow-500"><FaBurn /></span>,
      yDomain: [0, 3000],
      summary: `Average: ${data?.averageCalories} kcal`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10 flex items-center justify-center md:justify-start">
          <span className="mr-3 text-green-600 dark:text-green-400 text-5xl"><FaChartLine /></span> Biometric Data Details
        </h1>
        {error && <p className="text-red-500 mb-6 text-center">Error loading data: {error.message}</p>}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton height={400} className="rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chartConfig.map((config, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {config.icon}
                  <h2 className="text-xl font-semibold ml-2">{config.title}</h2>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={data?.metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={70} />
                    <YAxis domain={config.yDomain} />
                    <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <Area type="monotone" dataKey={config.dataKey} stroke={config.stroke} fill={config.fill} />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="mt-4 text-center text-lg font-medium">{config.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Biometric;