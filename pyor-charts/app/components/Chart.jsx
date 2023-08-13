'use client'

import ReactEChart from "echarts-for-react"

export const Chart = ({time, price, curr}) => {
  // const currName = 
  const eChartOptions = {
    title: {
      left: 'center',
      text: curr.toUpperCase()
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: time
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {

        type: 'line',
        symbol: 'none',
        
        data: price
      }
    ]
  };

  return (
    <div style={{width: "100%", height: "80vh", backgroundColor: "rgb(254 249 195)", padding: "20px"}}>
      <ReactEChart style={{width: "100%", height: "100%"}} option={eChartOptions}/>
    </div>
  )

}

export default Chart;