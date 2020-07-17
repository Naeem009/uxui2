import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Pie, Bar} from 'react-chartjs-2';




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
    },
    mngridbg:{
        backgroundColor: '#0c55Ba',
        display: 'flex'
    },
    gridbg:{
        backgroundColor: '#FFFFFF',
        margin: '5px',
        display: 'flex',
        height: '400px',
        textAlign: 'center'
    }
}));


export default function Pakistan() {
    const [pakData, setpakData] = useState([{}]);
    
    useEffect(() => {
        async function getData() {

            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotal=PK");
            let data = await response.json();
            
            setpakData(Object.values(data.countrydata));
            console.log(Object.values(data.countrydata));
            
        }
        getData();
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={1} className={classes.mngridbg}>
                <Grid item xs={12} sm={3} className={classes.gridbg}>
                <table>
                    <tr><h2>Pakistan Status</h2></tr>
                    
                    <tr>
                        <td className={classes.dataspc}>Country Name</td>
                        <td className={classes.dataspc}>Total Cases</td>
                        <td className={classes.dataspc}>Total Deaths</td>
                        <td className={classes.dataspc}>Total Recovered</td>
                    </tr>
                {pakData.map((key, ind) => {
                    return (
                        <tr>
                            <td className={classes.dataspc}>
                            {pakData[ind].title} 
                            </td>
                            <td className={classes.dataspc}>
                            {pakData[ind].total_cases}
                            </td>
                            <td className={classes.dataspc}>
                            {pakData[ind].total_deaths}
                            </td>
                            <td className={classes.dataspc}>
                            {pakData[ind].total_recovered}
                            </td>
                        </tr>
                    )
                    
                })}
                    
                    </table>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Pie/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <Bar />
                    </Grid>
            </Grid>
        </div>
    );
}
