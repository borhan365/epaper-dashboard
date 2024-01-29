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

function LineChartComponent2({data, type}) {
  return (
    <>
    <div className="chart-svg-wrapper">
      <ResponsiveContainer>
        {/* <ComposedChart
          width="100%"
          height="100%"
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            Response_time: i.averageResTime
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
          <Legend />
          <Line type="monotone" dataKey="Response_time" stroke="#009688" />
        </ComposedChart> */}

        <LineChart
          width="100%"
          height="100%"
          data={data?.map(i => { return   {
            name: i.date.split('T')[0],
            Response_time: i.averageResTime
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
          <Line type="monotone" dataKey="Response_time" stroke="#009688" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChartComponent2