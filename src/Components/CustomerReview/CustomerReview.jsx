import React from 'react';

//css
import './CustomerReview.css'

//react-apexcharts
import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [
          {
            name: "Review",
            data: [10, 50, 30, 90, 40, 120, 100],
          },
          {
            name: "Time",
            data: [11, 32, 55, 32, 34, 52, 41],
          },
        ],
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["#008FFB","#00E396"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2022-06-16T00:00:00.000Z",
              "2022-06-16T01:30:00.000Z",
              "2022-06-16T02:30:00.000Z",
              "2022-06-16T03:30:00.000Z",
              "2022-06-16T04:30:00.000Z",
              "2022-06-16T05:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
              "2022-06-16T06:30:00.000Z",
            ],
          },
          yaxis: {
            show: false
          },
          toolbar:{
            show: false
          }
        },
      };
    return (
        <div className='CustomerReview'>
            <Chart options={data.options} series={data.series} type='area' />
        </div>
    );
};

export default CustomerReview;