import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import MagChart from '../../components/Chart/MagChart';

//MUI add CSS properties with MakeStyles object 
const useStyles = makeStyles({
    container : {
        paddingLeft : '15vw',
        width : '85vw',
        height : 'fit-content'
    }
})

const Chart = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <MagChart />
        </Container>
    )
}

export default Chart;