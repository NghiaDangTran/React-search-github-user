

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const GroupedColumn = ({ data, title }) => {
    const cal = data.reduce((total, index) => {
        let { pushed_at } = index

        const year = pushed_at.substring(0, 4)
        const q = parseInt(pushed_at.substring(5, 7)) % 4
        if (!total[year])
            total[year] = {
                Q1: 0,
                Q2: 0,
                Q3: 0,
                Q4: 0,


            }
        const da = q == 0 ? "Q1" : q == 1 ? "Q2" : q == 2 ? "Q3" : q == 3 ? "Q4" : "0"

        total[year][da] = total[year][da] + 1

        return total
    }, {

    })
    const category = []
    const dataset = [{ seriesname: "Q1", data: [] }, { seriesname: "Q2", data: [] }, { seriesname: "Q3", data: [] }, { seriesname: "Q4", data: [] }]


    Object.keys(cal).forEach(i => {
        category.push({
            label: i
        })

        Object.keys(cal[i]).forEach((j, k) => {
            dataset[k]["data"].push({value:cal[i][j]})

        })
    })

    const chartConfigs = {
        type: "mscolumn2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: title,

                decimals: 0,
                doughnutRadius: '40%',
                showPercentValues: 0,

                theme: "fusion"
            },

            categories: [
                {
                    category

                }
            ],
            dataset
        }
    };
    return (<ReactFC {...chartConfigs} />);
};

export default GroupedColumn;
