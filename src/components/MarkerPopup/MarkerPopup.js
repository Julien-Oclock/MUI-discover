import React from 'react';
import {
     makeStyles,
     Paper,
     ListItemText,
     List,
     ListItem,
     Button
} from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
    container : {
      position : 'absolute',
      top : '30%',
      right : 0,
      padding : '5px',
    },
    button : {
        backgroundColor : '#3d5afe',
        color : 'white'
    },
    value : {
        color : 'green'
    }
  })

const  MarkerPopup = ({drone}) => {
    const classes = useStyles()
    console.log('render in popup', {drone})
    let DroneName = drone.uuid.substring(0,6).split().join('_')
    return (
        <Paper elevation={9} className={classes.container}>
            <h1>"drone <span>{DroneName}</span>"</h1>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem>
                    <ListItemText>uuid : <span className={classes.value}>{drone.uuid}</span> </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>arming state : <span className={classes.value}>{drone.arming_state}</span> </ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>version : <span className={classes.value}>{drone.fw_major}.{drone.fw_minor}.{drone.fw_patch}</span> </ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>lat : <span className={classes.value}>{drone.lat / 10000000}</span></ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>longitude : <span className={classes.value}>{drone.lon / 10000000}</span></ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>altitude : <span className={classes.value}>{drone.alt / 1000}</span> </ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>battery : <span className={classes.value}>{Math.round(drone.battery_status * 100)}%</span></ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>mag : <span className={classes.value}>{drone.mag_norm}</span></ListItemText>
                </ListItem>                
                <ListItem>
                    <ListItemText>time : <span className={classes.value}>{drone.time_usec}</span></ListItemText>
                </ListItem>
                <ListItem>
                    <Button component={RouterLink} to='/chart' className={classes.button} variant="contained">Go to graph</Button>
                </ListItem>
            </List>
        </Paper>
    );
}

export default MarkerPopup;