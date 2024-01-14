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
        fontWeight: 'bold',
    }
}));

export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);
    
    useEffect(() => {
        async function getData() {

            const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday=false&sort");
            let data = await response.json();
            console.log (data);
            setglobalData(Object.values(Object.values[0](data.country[0])));
            // setglobalData(Object.values(data.countryitems[0]));
            
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <table>
                    <thead>
                    <tr>
                        <td className={classes.dataspc}>Country Name</td>
                        <td className={classes.dataspc}>Total Cases</td>
                        <td className={classes.dataspc}>Total Deaths</td>
                        <td className={classes.dataspc}>Total Recovered</td>
                    </tr>
                    </thead>
                    <tbody>
                {globalData.map((key, ind) => {
                    return (
                        <tr key={globalData[ind].country}>
                            <td className={classes.dataspc}>{globalData[ind].country})</td>
                            <td className={classes.dataspc}>
                            {globalData[ind].cases}
                            </td>
                            <td className={classes.dataspc}>
                            {globalData[ind].deaths}
                            </td>
                            <td className={classes.dataspc}>
                            {globalData[ind].recovered}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
                    </table>
            </Grid>
        </div>
    );
}
