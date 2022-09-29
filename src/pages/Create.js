import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from '@material-ui/core'
import { fontSize, width } from '@mui/system'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('iot')

  const handleSubmit = (e) => {
    e.preventDefault()

    setDetailsError(false)
    setTitleError(false)
    if (!title || title.length <= 2) { setTitleError(true) }

    if (!details || details.length <= 2) { setDetailsError(true) }  

    if (title && details) {
      fetch('http://localhost:8001/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }


  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        noValidate
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Titre"
          variant='outlined'
          color='secondary'
          error={titleError}
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant='outlined'
          color='secondary'
          error={detailsError}
          multiline
          minRows={4}
          required
          fullWidth
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio />} label="Work" value="Work" />
            <FormControlLabel control={<Radio />} label="Todo" value="Todo" />
            <FormControlLabel control={<Radio />} label="Reminders" value="Reminders" />
          </RadioGroup>
        </FormControl>

        <Button
          className={classes.button}
          type='submit'
          color='secondary'
          variant='contained'
          onClick={() => console.log('You clicked me')}
          endIcon={<KeyboardArrowRightIcon />}

        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
