

import { Margin } from '@mui/icons-material';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', projection: 15000000, actual: 17000000 },
  { month: 'Feb', projection: 20000000, actual: 22000000 },
  { month: 'Mar', projection: 18000000, actual: 19000000 },
  { month: 'Apr', projection: 22000000, actual: 25000000 },
  { month: 'May', projection: 16000000, actual: 18000000 },
  { month: 'Jun', projection: 21000000, actual: 23000000 },
];

const ProjectionsVsActualsChart = () => {
  return (
    <div className='bar-container m-4'>
        <h3 className='pVsa'>Projections VS Actuals</h3>
         <BarChart width={460} height={300} data={data}  barSize={30}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
        <Tooltip />
        {/* Use the same stackId to merge/stack the bars */}
        <Bar dataKey="projection" fill="#A8C5DA" name="Projection" stackId="a"  />
        <Bar dataKey="actual" fill="#a9c6da80" name="Actual" stackId="a" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default ProjectionsVsActualsChart;

