import data from "../example_drilldown_piechart_data.json";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
drilldown(Highcharts);

const Scope = () => {
  const [series, setSeries] = useState([]);

  Object.getOwnPropertyNames(data).map((item, index) => {
    var scopeCount = Object.getOwnPropertyNames(data[item]).length;

    series.push({
      name: item,
      y: scopeCount,
      drilldown: item,
    });
    //console.log(obj);
  });

  //   useEffect(() => {
  //     let list = [];

  //     let scopeCounts = Object.getOwnPropertyNames(data).length;
  //     for (let i = 1; i <= scopeCounts; i++) {
  //       Object.getOwnPropertyNames(data[`Scope ${i}`]).map((item, index) => {
  //         var bb = Object.getOwnPropertyNames(data[`Scope ${i}`][item]).length;

  //         var obj1 = {
  //           name: item,
  //           y: bb - 1,
  //           drilldown: item,
  //         };
  //         console.log(obj1);
  //       });
  //     }
  //   });
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "My chart",
    },
    // series: [
    //   {
    //     name: "profit",
    //     data: [["one", 1], ["two", 50], ["Three", 3], 20, 10, 25, 40],
    //   },
    // ],
    series: [
      {
        name: "scopes",
        colorByPoint: true,
        data: series,
        //   {
        //     name: "Scope1",
        //     y: 4,
        //     drilldown: "scope1",
        //   },
        //   {
        //     name: "Scope2",
        //     y: 4,
        //     drilldown: "scope2",
        //   },
        //   {
        //     name: "Scope3",
        //     y: 15,
        //     drilldown: "scope3",
        //   },
      },
    ],
    //i added series for each step of drilldown
    drilldown: {
      series: [
        {
          id: "scope1",
          data: [
            {
              name: "Stationary combustion",
              y: 3,
              drilldown: "stationary combustion",
            },
            {
              name: "Mobile combustion",
              y: 7,
              drilldown: "mobile combustion",
            },
            {
              name: "Process emissions",
              y: 4,
              drilldown: "process emissions",
            },
            {
              name: "Fugitive emissions",
              y: 10,
              drilldown: "fugitive emissions",
            },
          ],
        },
        {
          id: "scope2",
          data: [
            {
              name: "Stationary combustion",
              y: 3,
              drilldown: "stationary combustion",
            },
            {
              name: "Mobile combustion",
              y: 7,
              drilldown: "mobile combustion",
            },
            {
              name: "Process emissions",
              y: 4,
              drilldown: "process emissions",
            },
            {
              name: "Fugitive emissions",
              y: 10,
              drilldown: "fugitive emissions",
            },
          ],
        },

        {
          id: "stationary combustion",
          data: [
            {
              name: "Activity 1",
              y: 348.2180161951077,
            },
            {
              name: "Activity 2",
              y: 532.7006332709296,
            },
            {
              name: "Activity 3",
              y: 1199.3629477642955,
            },
          ],
        },
        {
          id: "mobile combustion",
          data: [
            {
              name: "Activity 4",
              y: 1438.8019766857358,
            },
            {
              name: "Activity 5",
              y: 1184.124427535566,
            },
            {
              name: "Activity 6",
              y: 1868.7135740705016,
            },
            {
              name: "Activity 7",
              y: 1688.4400213821737,
            },
            {
              name: "Activity 8",
              y: 1151.5705033119443,
            },
            {
              name: "Activity 9",
              y: 982.8703612828364,
            },
            {
              name: "Activity 10",
              y: 1815.7775602803242,
            },
          ],
        },
        {
          id: "process emissions",
          data: [
            {
              name: "Activity 11",
              y: 1534.6470377943763,
            },
            {
              name: "Activity 12",
              y: 410.165489122935,
            },
            {
              name: "Activity 13",
              y: 99.38244939233395,
            },
            {
              name: "Activity 14",
              y: 1465.2155291531853,
            },
          ],
        },
        {
          id: "fugitive emissions",
          data: [
            {
              name: "Activity 15",
              y: 852.2366972253552,
            },
            {
              name: "Activity 16",
              y: 282.4304397309963,
            },
            {
              name: "Activity 17",
              y: 712.0063549101866,
            },
            {
              name: "Activity 18",
              y: 370.1571836550834,
            },
            {
              name: "Activity 19",
              y: 755.3647778661218,
            },
            {
              name: "Activity 20",
              y: 1338.7863370881564,
            },
            {
              name: "Activity 21",
              y: 293.22065931768185,
            },
            {
              name: "Activity 22",
              y: 1844.4648597849975,
            },
            {
              name: "Activity 23",
              y: 1588.4696848258195,
            },
            {
              name: "Activity 24",
              y: 1483.5304809232812,
            },
          ],
        },
      ],
    },
  };
  return (
    <div className="App">
      {/* <Scope /> */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Scope;
