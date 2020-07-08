import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 35,
        marginLeft: 10,
        textAlign: 'left',
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

    },
    dataspc: {
        padding: 5,
        marginLeft: 5,
    }
}));

export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);
    
    useEffect(() => {
        async function getData() {

            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            
            setglobalData(Object.values(Object.values(data.countryitems[0])));
            console.log(Object.values(Object.values(data.countryitems[0])));
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <table>
                    <tr>
                        <td className={classes.dataspc}>Country Name</td>
                        <td className={classes.dataspc}>Total Cases</td>
                        <td className={classes.dataspc}>Total Deaths</td>
                        <td className={classes.dataspc}>Total Recovered</td>
                    </tr>
                {globalData.map((key, ind) => {
                    return (
                        <tr>
                            <td className={classes.dataspc}>{globalData[ind].title}</td>
                            <td className={classes.dataspc}>
                            {globalData[ind].total_cases}
                            </td>
                            <td className={classes.dataspc}>
                            {globalData[ind].total_deaths}
                            </td>
                            <td className={classes.dataspc}>
                            {globalData[ind].total_recovered}
                            </td>
                        </tr>
                                
                                
                       
                    )
                })}
                    </table>
            </Grid>
        </div>
    );
}
