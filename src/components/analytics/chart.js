import React from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@chakra-ui/react";

const RadialBarChart = () => {
  const theme = useTheme();

  const chartData = {
    series: [100, 70, 30],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: [
        theme.colors.gray[600],
        theme.colors.gray[500],
        theme.colors.gray[400],
      ],
      labels: ["Applied", "Rejected", "Answered & Disappeared"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 160,
        offsetY: 15,
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
        labels: {
          colors: theme.colors.white,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="radialBar"
      height={390}
    />
  );
};

export default RadialBarChart;
