import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import styles from "./Chart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        // const fetchAPI = async ()=> {
        //     const initialDailyData = await fetchDailyData();
        //     setDailyData(initialDailyData);
        // }
        
        // fetchAPI();

        fetch("https://covid19.mathdro.id/api/daily")
        .then(res=> res.json())
        .then(data => setDailyData(data))
    },[]);

    console.log(dailyData);

    const lineChart = (
        dailyData.length !== 0 ?
        <Line
            data={{
                labels: dailyData.map(data => new Date(data.reportDate).toLocaleDateString()),
                datasets: [{
                    data: dailyData.map(data => data.confirmed.total),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true,
                },
                {
                    data: dailyData.map(data => data.deaths.total),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true,       
                }],
            }}
        >
        </Line>
        : <h2>Error</h2>
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;