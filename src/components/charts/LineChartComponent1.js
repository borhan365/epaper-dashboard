import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  LineChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100
  }
];

function LineChartComponent1({data}) {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        <LineChart
          width="100%"
          height="100%"
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            Average_session_time: i.averageSessTime
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
          <Line type="monotone" dataKey="Average_session_time" stroke="#009680" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChartComponent1