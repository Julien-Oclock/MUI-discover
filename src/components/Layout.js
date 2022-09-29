import { makeStyles, Drawer, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    page : {
        background : '#f9f9f9',
        width : '100%'
    },
    drawer : {
        width : '300px'
    }
})

function Layout({ children}) {

    const classes = useStyles()
    return ( 
        <div>

            <Drawer className='classes.drawer'>
                <div>
                    <Typography variant='h4'>
                        Drotek Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                { children }
            </div>
        </div>

    );
}

export default Layout;