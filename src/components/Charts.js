import React from "react";

const Chart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Salacia Programming Challenge",
      align: "left",
    },

    series: [
      {
        name: "1.1 - Stationary combustion",
        colorByPoint: true,
        data: [
          {
            name: "Activity 1",
            y: 348.2180161951077,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 2",
            y: 532.7006332709296,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 3",
            y: 1199.3629477642955,
            drilldown: "tonnes CO2e",
          },
        ],
      },
      {
        name: "1.2 - Mobile combustion",
        colorByPoint: true,
        data: [
          {
            name: "Activity 4",
            y: 1438.8019766857358,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 5",
            y: 1184.124427535566,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 6",
            y: 1868.7135740705016,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 7",
            y: 1688.4400213821737,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 8",
            y: 1151.5705033119443,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 9",
            y: 982.8703612828364,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 10",
            y: 1815.7775602803242,
            drilldown: "tonnes CO2e",
          },
        ],
      },
      {
        name: "1.3 - Process emissions",
        colorByPoint: true,
        data: [
          {
            name: "Activity 11",
            y: 1534.6470377943763,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 12",
            y: 410.165489122935,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 13",
            y: 99.38244939233395,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 14",
            y: 1465.2155291531853,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 15",
            y: 852.2366972253552,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 16",
            y: 282.4304397309963,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 17",
            y: 712.0063549101866,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 18",
            y: 370.1571836550834,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 19",
            y: 755.3647778661218,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 20",
            y: 1338.7863370881564,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 21",
            y: 293.22065931768185,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 22",
            y: 1844.4648597849975,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 23",
            y: 1588.4696848258195,
            drilldown: "tonnes CO2e",
          },
          {
            name: "Activity 24",
            y: 1483.5304809232812,
            drilldown: "tonnes CO2e",
          },
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Chart;
