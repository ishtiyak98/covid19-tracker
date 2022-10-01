import React, { useEffect, useState } from 'react';
import styles from "./Chart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line, Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const Chart = ({country, countryName}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        fetch("https://covid19.mathdro.id/api/daily")
        .then(res=> res.json())
        .then(data => setDailyData(data))
    },[]);

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
        : <h2>Loading</h2>
    );

    const barChart = (
        country !== "global" &&
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    data: [parseFloat(Object.values(country)[5])?parseFloat(Object.values(country)[5].replace(/,/g, '')):0, parseFloat(Object.values(country)[7])?parseFloat(Object.values(country)[7].replace(/,/g, '')):0, parseFloat(Object.values(country)[6])?parseFloat(Object.values(country)[6].replace(/,/g, '')):0],
                    label: ["Infected","Recovered","Deaths"],
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                }],
            }}
            options = {{
                responsive: true,
                plugins: {
                    legend: { display: false },
                  title: {
                    display: true,
                    text: `Current Situation in ${countryName}`,
                  },
                },
              }}
        >
        </Bar>
            
    );
    return (
        <div className={styles.container}>
            {
            countryName==="global"?lineChart:barChart}
        </div>
    );
};

export default Chart;