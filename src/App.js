import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { indigo, purple } from '@material-ui/core/colors';

// import component
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout/Layout'
import MyMap from './pages/Map/Map';
import Websocket from './pages/Websocket/Websocket';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: indigo
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/map">
              <MyMap />
            </Route>
            <Route path="/ws">
              <Websocket />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>

  );
}

export default App;
