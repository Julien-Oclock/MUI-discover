import React, { useEffect, useState } from 'react'
import { makeStyles, Container, Grid, Paper } from '@material-ui/core'

import NoteCard from '../components/Notecard/Notecard.js'

const useStyles = makeStyles({
  container : {
    marginLeft : '15vw',
    maxWidth : '85vw',
    height : '100vh'
  }
})

export default function Notes() {

  const [notes, setNotes] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetch('http://localhost:8765/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8765/notes/' + id, {
      method:'DELETE'
    })
    const newNotes = notes.filter((note)=> note.id != id)
    setNotes(newNotes)
  }

  return (
    <Container className={classes.container}>
      {
      /* Utilisation de 'grid' dans le cadre de la mise en page avec MUI
        le grid avc l'attribut container permet de créer une grille (flexbox)
        le grid avec l'attribut item permet de créer des éléments de la grille et on peut lui donner des attributs pour définir la taille de l'élément
        Paper permet de créer des éléments de type papier (avec un box-shadow)
      */
      }
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>
              <NoteCard note={note} handleDelete = {handleDelete}/>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}
