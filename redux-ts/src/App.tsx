import React from 'react';
import './App.css';
import './styles/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './app/views/Main';
import PhotoGrid from './app/components/Photo/PhotoGrid';
import PhotoSingle from './app/components/Photo/PhotoSingle';

interface Props {}

const App = (props: Props) => {
  return (
    <div className="App">
      <Router>
        <Main />
        <Switch>
          <Route exact path="/">
            <PhotoGrid>
              <PhotoSingle />
            </PhotoGrid>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
