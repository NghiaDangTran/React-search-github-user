

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3D = ({ data, title }) => {
  let cal = data.reduce((total, item) => {
    let { stargazers_count, name, } = item
    total[stargazers_count] = {
      label: name, 
      value: stargazers_count
    }
    return total

  }, {

  })


  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: title,

        yAxisName: "Starts",
        xAxisName: "Repos",
        xAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',formatnumberscale: "1",
        theme: "fusion",
        PaletteColors:["#156064", "#00C49A","#F8E16C", "#FFC2B4","#FB8F67"]
      },

      data: Object.values(cal).sort((a, b) => {
        if (a.value !== b.value) {
          return a.value - b.value
        }
        else {
          let fa = a.label.toLowerCase(),
            fb = b.label.toLowerCase();


          return fa < fb ? -1 : fa > fb ? 1 : 0

        }


      }).reverse().slice(0,5)
    }
  };
  return (<ReactFC {...chartConfigs} />);
};

export default Column3D;
