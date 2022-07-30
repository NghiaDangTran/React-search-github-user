import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({data,title}) => {
  const cal = data.reduce((total, index) => {
    let { language } = index
    if (!language)

      language = "orther"
    if (total[language])
      total[language].value += 1
    else total[language] = {
      label: language,
      value: 1
    }
    return total
  }, {})
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: title,
        //Set the chart subcaption
        //Set the x-axis name
        decimals:0,
        pieRadius:'40%',
   
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data:Object.values(cal).sort((a, b) => {
        if (a.value !== b.value) {
          return a.value - b.value
        }
        else {
          let fa = a.label.toLowerCase(),
            fb = b.label.toLowerCase();
      
      
          return fa<fb?-1:fa > fb?1:0

        }
      
      
      })
    }
  };
  return (<ReactFC {...chartConfigs} />);
};

export default Pie3D;
