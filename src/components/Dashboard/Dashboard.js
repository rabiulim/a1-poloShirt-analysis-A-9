import React from 'react';
import './Dashboard.css'
import MyLineChart from '../LineChart/LineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
const Dashboard = () => {
    return (
        <div className='flex justify-between m-6'>
            <div className='justify-center text-center'>
                <h3 className='text-2xl'>Investment VS Reveneu</h3>
                <MyLineChart></MyLineChart>
            </div>
            <div>
                <h3 className='text-2xl'>Month wise sell vs investment</h3>
                <MyBarChart></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard;