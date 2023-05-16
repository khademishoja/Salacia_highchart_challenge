import data from "../example_drilldown_piechart_data.json";
import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import "./style.css";
drilldown(Highcharts);

const Scope = () => {
  const series = [];
  const [chartType, setChartType] = useState("pie");
  //scopes
  Object.getOwnPropertyNames(data).map((scope, index) => {
    let scopeCount = Object.getOwnPropertyNames(data[scope]).length;

    series.push({
      name: scope,
      y: scopeCount,
      drilldown: scope,
    });
  });

  //Category
  const drilldownInfo = [];
  let scopeCounts = Object.getOwnPropertyNames(data).length;

  for (let i = 1; i <= scopeCounts; i++) {
    let categories = [];
    Object.getOwnPropertyNames(data[`Scope ${i}`]).map((category, index) => {
      let activitiesCount = Object.getOwnPropertyNames(
        data[`Scope ${i}`][category]
      ).length;

      categories.push({
        name: category,
        y: activitiesCount - 1, //
        drilldown: category,
      });
    });
    drilldownInfo.push({
      id: `Scope ${i}`,
      data: categories,
    });
  }

  //Indivisual activities
  for (let i = 1; i <= scopeCounts; i++) {
    let categories = Object.getOwnPropertyNames(data[`Scope ${i}`]);
    categories.map((item, index) => {
      let activities = data[`Scope ${i}`][item];
      const level3Data = activities.map((activity, index) => {
        let activityObj = {
          name: activity[0],
          y: activity[1],
        };
        return activityObj;
      });

      drilldownInfo.push({ id: item, data: level3Data });
    });
  }
  const options = {
    chart: {
      type: chartType,
    },
    title: {
      text: "Salacia Programming Challenge",
    },
    credits: {
      text: "salaciasolutions.com",
      href: "https://salaciasolutions.com/",
      style: { padding: "5px", fontSize: "20px", color: "red" },
    },

    series: [
      {
        name: "scopes",
        colorByPoint: true,
        data: series,
      },
    ],
    //I added series for each step of drilldown
    drilldown: {
      series: drilldownInfo,
    },
  };
  const chartTypes = [
    { value: "pie", label: "pie" },

    { value: "column", label: "Column" },
    { value: "bar", label: "Bar" },
    { value: "line", label: "Line" },
  ];
  const chartTypeChange = (event) => {
    setChartType(event.target.value);
  };
  return (
    <div className="scope-chart">
      <div className="chart-select">
        <label>Please Select Chart Type(pie,column,bar,line):</label>
        <select value={chartType} onChange={chartTypeChange}>
          {chartTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Scope;
