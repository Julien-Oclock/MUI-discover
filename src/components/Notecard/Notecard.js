import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    makeStyles,
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'


const useStyles = makeStyles({
    title : {
        color : (note) => {
            if(note.category == 'Work') return 'green'
            if(note.category == 'Todo') return 'red'
            if(note.category == 'Reminders')return '#3d5afe'
        }
    },
    card : {
        border : (note) => {
            if(note.category == 'Work') return '1px solid green'
            if(note.category == 'Todo') return '1px solid red'
            if(note.category == 'Reminders')return '1px solid #3d5afe'
        }
    }
})

export default function NoteCard({ note, handleDelete}) {

    const classes = useStyles(note)
    return (
        <Card elevation={6} className={classes.card}>
            <CardHeader 
            className={classes.title}
                action = {
                    <IconButton onClick={() => {
                        handleDelete(note.id)
                    }}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title = { note.title }
                subheader={ note.category }
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}
