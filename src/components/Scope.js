import data from "../example_drilldown_piechart_data.json";
import { Children, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
drilldown(Highcharts);

const Scope = () => {
  const [series, setSeries] = useState([]);
  //step1 scopes
  Object.getOwnPropertyNames(data).map((item, index) => {
    let scopeCount = Object.getOwnPropertyNames(data[item]).length;

    series.push({
      name: item,
      y: scopeCount,
      drilldown: item,
    });
    //console.log(obj);
  });

  // drilldown step2
  const drilldownInfo = [];
  let scopeCounts = Object.getOwnPropertyNames(data).length;

  for (let i = 1; i <= scopeCounts; i++) {
    let children = [];
    Object.getOwnPropertyNames(data[`Scope ${i}`]).map((item, index) => {
      let count = Object.getOwnPropertyNames(data[`Scope ${i}`][item]).length;

      children.push({
        name: item,
        y: count - 1,
        drilldown: item,
      });
    });
    drilldownInfo.push({
      id: `Scope ${i}`,
      data: children,
    });
  }

  //sctep3
  for (let i = 1; i <= scopeCounts; i++) {
    // debugger;
    let children = Object.getOwnPropertyNames(data[`Scope ${i}`]);
    children.map((item, index) => {
      let level3 = data[`Scope ${i}`][item];
      const level3Data = level3.map((activity, index) => {
        // debugger;
        let activityObj = {
          name: activity[0],

          y: activity[1],
        };
        return activityObj;
      });
      console.log(level3Data);

      drilldownInfo.push({ id: item, data: level3Data });
    });
  }
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Salacia Programming Challenge",
    },
    series: [
      {
        name: "scopes",
        colorByPoint: true,
        data: series,
      },
    ],
    //i added series for each step of drilldown
    drilldown: {
      series: drilldownInfo,
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Scope;
