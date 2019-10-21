import React, {useState} from 'react';
import './App.css';

import {AppBar, TextField, Container, Typography} from '@material-ui/core';

import SongList from './views/SongList';
import SongViewer from './views/SongViewer';
import generalStyles from './utils/generalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [filter, setFilter] = useState("");

  const handleChange = event => {
    setFilter(event.target.value);
  }

  return (
    <Router>
      <div className="App">
      <AppBar style={{...generalStyles.flexRow, height: 50, alignItems: 'center'}} position="sticky">
        <Typography style={{fontWeight: 'bold', fontSize: '1.5em'}}>BachataFacil</Typography>
        
        <TextField 
          style={{...generalStyles.filterTextField, marginLeft: "auto", borderRadius: 5}}
          value={filter}
          placeholder="Buscar"
          onChange={handleChange}
        />
      </AppBar>
      <Container>
        <Switch>
          <Route path="/viewer/:id" >
            <SongViewer />
          </Route> 
          <Route path="/">
            <SongList filter={filter} />
          </Route>
        </Switch>
      </Container>
      </div>
  
    </Router>
    
   
 
  );
}

export default App;

