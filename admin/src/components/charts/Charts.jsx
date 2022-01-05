import './Charts.css'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid}) {
    return (
        <div className = 'charts'>
            <h3 className="chartTitle">{title}</h3>
         <ResponsiveContainer width="100%" aspect = {4 / 1}>
            <LineChart data = {data}> 
            <XAxis dataKey = 'name' stroke ='#5550bd'/>
            <Line type= 'monotone' dataKey = 'Active User' stroke ='#5550bd'/>
            <Tooltip/>
            {grid &&< CartesianGrid stroke = '#e0dfdf' strokeDasharray = '5 5'/>}
            </LineChart>
          </ResponsiveContainer>
            
        </div>
    )
}

