import {
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    CardMedia
 } from '@material-ui/core';
import { Add, AddAlarmOutlined, AddCircleOutlineOutlined, AddIcCallOutlined, AddTwoTone, ApartmentRounded, CenterFocusStrong, InsertChart, LeakAddOutlined, LocalActivityRounded, MapOutlined, SubjectOutlined,  } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = '15vw'

const useStyles = makeStyles((theme) => {

    return {
            page : {
                background : '#f9f9f9',
                width : '100%',
                paddingTop : '20px'
        
            },
            drawer : {
                width : drawerWidth,
        
            },
            drawerPaper : {
                width : drawerWidth,
                paddingTop : '20px'
        
            },
            root : {
                display :'flex',
            },
            list : {
                paddingTop : '100px'
            },
            active : {
                background : '#3d5afe',
                color : 'white',
                '&:hover' : {
                    background : '#3d5afe',
                    color : 'white',
                }
            },
            typography : {
                textAlign : 'center'
            },
            divider : {
                margin : '20px'
            },
            img : {
                width: '100px',
                margin: '0 auto'
            }
    }
})

function Layout({ children }) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItem = [
        {
            text : 'My Notes',
            icon : <SubjectOutlined color={location.pathname == '/' ? "primary" : "secondary" }/>,
            path : '/'
        },
        {
            text : 'Create Notes',
            icon : <AddCircleOutlineOutlined color={ location.pathname == '/create' ? "primary" :"secondary"} />,
            path : '/create'
        },
        {
            text : 'Map View',
            icon : <MapOutlined color={ location.pathname == '/map' ? "primary" :"secondary"} />,
            path : '/map'
        },
        {
            text : 'Chart',
            icon : <InsertChart color={ location.pathname == '/chart' ? "primary" :"secondary"} />,
            path : '/chart'
        }
    ]


    return ( 
        <div className={classes.root}>

            <Drawer 
                className='classes.drawer'
                variant='permanent'
                anchor='left'
                classes={{paper : classes.drawerPaper}}                
                >
                <CardMedia
                    className={classes.img}
                    component="img"
                    image="/logodrotek.png"
                    alt="logo drotek" />
                <Divider className={classes.divider}/>
                <List className={classes.list}>
                    {menuItem.map((item) => (
                        <ListItem 
                        key={item.text} 
                        button
                        onClick={() => {
                            history.push(item.path)
                        }}
                        className = { location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>


            </Drawer>
            <div className={classes.page}>
                { children }
            </div>
        </div>

    );
}

export default Layout;