import React from 'react';
import Sidebar from './components/sidebar';
import MetricCard from './components/metricCard';
import RevenueChart from './components/revenueLineChart';
import SalesPieChart from './components/pieChart';

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="metrics">
          <MetricCard title="Customers" value="3,781" change="+11.01%" />
          <MetricCard title="Orders" value="1,219" change="-0.35%" />
          <MetricCard title="Revenue" value="$695" change="+15.03%" />
          <MetricCard title="Growth" value="30.1%" change="+10.08%" />
        </div>
        <div className="charts">
          <RevenueChart />
          <SalesPieChart />
        </div>
      </div>
    </div>
  );
};

export default App;
