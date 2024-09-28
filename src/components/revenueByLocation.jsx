import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const MapComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const locations = [
      { location: 'New York', latitude: 40.7128, longitude: -74.0060, revenue: 50000 },
      { location: 'San Francisco', latitude: 37.7749, longitude: -122.4194, revenue: 30000 },
      { location: 'Sydney', latitude: -33.8688, longitude: 151.2093, revenue: 20000 },
      { location: 'Singapore', latitude: 1.3521, longitude: 103.8198, revenue: 60000 },
    ];

    const chartData = [
      ['Latitude', 'Longitude', 'Location', 'Revenue'],
      ...locations.map((location) => [location.latitude, location.longitude, location.location, location.revenue]),
    ];

    setChartData(chartData);
  }, []);

  const chartOptions = {
    title: 'Revenue by Location',
    mapType: 'normal',
    zoomLevel: 1,
    legend: { position: 'bottom' },
    colorAxis: {
      colors: ['#f1c40f', '#0087ca'],
      minValue: 0,
      maxValue: 72000,
    },
    chartArea: { width: '100%', height: '100%' },
  };

  return (
    <div>
      <Chart
        chartType="GeoChart"
        data={chartData}
        options={chartOptions}
      />
      <div className='mt-5'>
        {chartData.slice(1).map((row) => (
          <div key={row[2]}>
            <p>{row[2]}</p>
            <div style={{ width: '100%', backgroundColor: '#f0f0f0', height: 10 }}>
              <div style={{ width: `${(row[3] / 72000) * 100}%`, backgroundColor: '#0087ca', height: 10 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
