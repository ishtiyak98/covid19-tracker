import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { style } from '@mui/system';
import CountUp from 'react-countup';
import cx from "classnames"
import styles from "./Cards.module.css";


const Cards = ({data}) => {
    console.log(data)
    return (
        <div className={style.container}>
             <Grid container spacing={3} justify="center" sx={{my:"10px"}}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={data?.confirmed?.value} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Active cases from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={data?.recovered?.value} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Recoveries from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={data?.deaths?.value} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Deaths by COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
             </Grid>
        </div>
    );
};

export default Cards;