import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper } from '@material-ui/core'

import NoteCard from '../components/Notecard'

export default function Notes() {

  const [notes, setNotes] = React.useState([])

  useEffect(() => {
    fetch('http://localhost:8001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8001/notes/' + id, {
      method:'DELETE'
    })
    const newNotes = notes.filter((note)=> note.id != id)
    setNotes(newNotes)
  }

  return (
    <Container>
      {/* Utilisation de 'grid' dans le cadre de la mise en page avec MUI
        <Grid container> // le grid avc l'attribut container permet de créer une grille (flexbox)
          <Grid item xs={12} md={3} sm={6}>// le grid avec l'attribut item permet de créer des éléments de la grille et on peut lui donner des attributs pour définir la taille de l'élément
            <Paper>1</Paper> // Paper permet de créer des éléments de type papier (avec un box-shadow)
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Paper>2</Paper>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Paper>3</Paper>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Paper>4</Paper>
          </Grid>
        </Grid> */}
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
