

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar2d = ({ data, title }) => {
  const cal = data.reduce((total, index) => {
    let { open_issues_count,name } = index
    total[open_issues_count]={label:name,value:open_issues_count}
    return total
  }, {})

  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: title,

      
        xAxisName: "Repos",
        xAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',
        theme: "fusion",        PaletteColors:["#E3170A", "#A9E5BB","#FCF6B1", "#F7B32B","#2D1E2F"]

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

export default Bar2d;
