import React from 'react';
import MyLineChart from '../LineChart/LineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
const Dashboard = () => {
    return (
        <div>
            <h3>Investment VS Reveneu</h3>
            <MyLineChart></MyLineChart>
            Month wise sell vs investment
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;