import React from 'react';
import { Line } from 'react-chartjs-2';

const RevenueChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Previous Week',
        data: [5, 15, 8, 13, 21, 10],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return <Line data={data} />;
};

export default RevenueChart;
