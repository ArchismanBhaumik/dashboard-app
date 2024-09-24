import React from 'react';
import { Pie } from 'react-chartjs-2';

const SalesPieChart = () => {
  const data = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        data: [38.6, 30.5, 15.2, 8.4],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default SalesPieChart;
