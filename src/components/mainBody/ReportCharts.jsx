import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/chartdata');
        const data = await response.json();
        setChartData(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Chart
      options={chartData.options || {}}
      series={chartData.series || []}
      type={chartData.options?.chart?.type || 'line'}
      height={chartData.options?.chart?.height || 350}
    />
  );
}

export default ReportCharts;

