import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100
//   }
// ];

function LineChartComponent({data}) {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        {/* <ComposedChart
          width="100%"
          height="100%"
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            chats: i.count
          }})}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend /> */}
          {/* <Area type="monotone" dataKey="amt" fill="#00968821" stroke="#009688" /> */}
          {/* <Bar dataKey="chats" barSize={40} fill="#009688" />
        </ComposedChart> */}
        
        <BarChart
          width='100%'
          height='100%'
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            chats: i.count
          }})}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="chats" fill="#009688" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChartComponent