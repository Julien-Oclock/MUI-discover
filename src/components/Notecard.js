import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'


export default function NoteCard({ note, handleDelete}) {


    return (
        <Card elevation={6}>
            <CardHeader
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
