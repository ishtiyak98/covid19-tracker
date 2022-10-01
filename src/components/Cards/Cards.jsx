import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { style } from '@mui/system';
import CountUp from 'react-countup';
import cx from "classnames"
import styles from "./Cards.module.css";


const Cards = ({data}) => {
    return (
        <div>
             <Grid container spacing={3} justify="center" sx={{mt:"10px", mb:"50px" }}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={parseFloat(Object.values(data)[5])?parseFloat(Object.values(data)[5].replace(/,/g, '')):0} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(Object.values(data)[2]).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Active cases from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={parseFloat(Object.values(data)[5])?parseFloat(Object.values(data)[7].replace(/,/g, '')):0} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(Object.values(data)[2]).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Recoveries from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Card sx={{ minWidth: 275 }} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography align="center" color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography align="center" variant="h4">
                                <CountUp start={0} end={parseFloat(Object.values(data)[7])?parseFloat(Object.values(data)[6].replace(/,/g, '')):0} duration={1.5} separator={","}></CountUp>
                            </Typography>
                            <Typography align="center" color="text-textSecondary">{new Date(Object.values(data)[2]).toDateString()}</Typography>
                            <Typography align="center" variant="body2">Deaths by COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
             </Grid>
        </div>
    );
};

export default Cards;