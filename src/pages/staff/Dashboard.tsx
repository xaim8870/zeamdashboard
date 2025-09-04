import React from "react";

const StaffDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Staff Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Schedule
          </h2>
          <p className="text-gray-600">Manage daily staff schedules and shifts.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">
            Tasks
          </h2>
          <p className="text-gray-600">View and complete assigned tasks.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-yellow-600 mb-3">
            Reports
          </h2>
          <p className="text-gray-600">Submit and review staff performance reports.</p>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
