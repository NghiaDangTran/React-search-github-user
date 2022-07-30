

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({data,title}) => {
  const cal = data.reduce((total, index) => {
    let { language,stargazers_count } = index
    if (!language)

      language = "orther"
    if (total[language])
      total[language].value += stargazers_count
    else total[language] = {
      label: language,
      value: stargazers_count
    }
    return total
  }, {})

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: title,
    
        decimals:0,
        doughnutRadius:'40%',
        showPercentValues:0,
      
        theme: "fusion"
      },
      
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

export default Doughnut2d;
