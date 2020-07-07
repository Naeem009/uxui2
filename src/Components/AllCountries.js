import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 35,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: 'navy',
        fontStyle: 'italic',
        textTransform: 'uppercase',
    },
    figure: {
        color: 'green',

    }
}));

export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);
    
    useEffect(() => {
        async function getData() {

            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            
            setglobalData(Object.values(data.countryitems[0]));
            console.log(data.countryitems[0]["1"]);
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                {Object.keys(globalData[0]).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <h3 className={classes.title}>
                                    {key.replace(/_/g, ' ')}
                                </h3>
                                <h3 className={classes.figure}>
                                    {globalData[0][key]}
                                </h3>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
}
