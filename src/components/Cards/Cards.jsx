import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { style } from '@mui/system';
import CountUp from 'react-countup';
import cx from "classnames"
import styles from "./Cards.module.css";


const Cards = ({data}) => {
    console.log(data)
    return (
        <section className={style.container}>
             <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data?.confirmed?.value} duration={2.5} separator={","}></CountUp>
                        </Typography>
                        <Typography color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Case</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data?.recovered?.value} duration={2.5} separator={","}></CountUp>
                        </Typography>
                        <Typography color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Case</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data?.deaths?.value} duration={2.5} separator={","}></CountUp>
                        </Typography>
                        <Typography color="text-textSecondary">{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Case</Typography>
                    </CardContent>
                </Grid>
             </Grid>
        </section>
    );
};

export default Cards;