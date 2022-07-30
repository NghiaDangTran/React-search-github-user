

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3d = ({ data, title }) => {
  const cal = data.reduce((total, index) => {
    let { forks_count,name } = index
    total[forks_count]={label:name,value:forks_count}
    return total
  }, {})

  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: title,

        yAxisName: "Forked",
        xAxisName: "Repos",
        xAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',
        theme: "fusion",        PaletteColors:["#4C6085", "#39A0ED","#36F1CD", "#13C4A3","#32322C"]

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

export default Bar3d;
