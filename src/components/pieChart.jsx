import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Direct', 'Affiliate', 'Sponsored'],
  datasets: [{
    data: [300.56, 135.18, 154.02,48.96],
    backgroundColor: ['#1C1C1C','#BAEDBD', '#B1E3FF', '#95A4FC', ],
    borderWidth: 0,
  }]
};

const options = {
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.formattedValue;
            return `${label}: $${value}`;
          }
        }
      }
    },
    cutout: '50%' 
  };

const SalesPieChart = () => {
    return (
        <div className='doughnut-chart'>
        <h3>Total Sales</h3>
          <Doughnut data={data} options={options} />
          <div className='doughnut-chart-list' >
            <ul>
              <li>Direct: $300.56</li>
              <li>Affiliate: $135.18</li>
              <li>Sponsored: $154.02</li>
              <li>E-mail: $48.96</li>
            </ul>
          </div>
        </div>
      );
};

export default SalesPieChart;