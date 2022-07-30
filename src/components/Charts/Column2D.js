

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column2D = ({ data, title }) => {
  let cal = data.reduce((total, item) => {
    let { size, name, } = item
    total[size] = {
      label: name, 
      value: size
    }
    return total

  }, {

  })


  const chartConfigs = {
    type: "column3d", // The chart type
    width: "90%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: title,

        yAxisName: "Size",
        xAxisName: "Repos",
        xAxisNameFontSize: '16px',
        xAxisNameFontSize: '16px',formatnumberscale: "1",
        theme: "fusion",
        PaletteColors:["#2B2D42", "#92DCE5","#F8F7F9", "#F7EC59","#FF66D8"]
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

export default Column2D;
