import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Typography from "@mui/material/Typography";

const data = [
  { name: "Jan", currentWeek: 12000000, previousWeek: 14000000 },
  { name: "Feb", currentWeek: 18000000, previousWeek: 10000000 },
  { name: "Mar", currentWeek: 10000000, previousWeek: 18000000 },
  { name: "Apr", currentWeek: 10000000, previousWeek: 12000000 },
  { name: "May", currentWeek: 13000000, previousWeek: 9000000 },
  { name: "Jun", currentWeek: 10000000, previousWeek: 15000000 },
];

const ChartComponent = () => {
  // Calculate total revenue for current and previous weeks
  const totalCurrentWeek = data.reduce(
    (acc, item) => acc + item.currentWeek,
    0
  );
  const totalPreviousWeek = data.reduce(
    (acc, item) => acc + item.previousWeek,
    0
  );
  return (
    <div>
  <div className="d-flex justify-content-between align-items-center w-50 mb-3">
    <h5 className="flex-grow-1 text-center m-0" style={{ minWidth: '150px' }}>
      Revenue
    </h5>
    <h5 className="flex-grow-1 text-center m-0" style={{ minWidth: '200px' }}>
      Current Week Total: ${totalCurrentWeek}
    </h5>
    <h5 className="flex-grow-0 m-0">|</h5>
    <h5 className="flex-grow-1 text-center m-0" style={{ minWidth: '200px' }}>
      Previous Week Total: ${totalPreviousWeek}
    </h5>
  </div>

  <div style={{ overflowX: 'auto' }}>
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="name" />
      <YAxis
        dataKey="revenue"
        domain={[0, 30000000]}
        tickFormatter={(value) => `${value / 1000000}M`}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip />
      <Line
        type="basis"
        dataKey="currentWeek"
        strokeWidth={2}
        stroke="black"
      />
      <Line
        type="basis"
        dataKey="previousWeek"
        stroke="#8884d8"
        strokeWidth={2}
      />
    </LineChart>
  </div>
</div>

  );
};
export default ChartComponent;
