import React from 'react';
import "./style/Chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data, title, grid, dataKey}) => {

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;