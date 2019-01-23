import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import SomaLab from './pages/SomaLab'
import Mixtape from './pages/Mixtape'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/somalab" component={SomaLab} />
          <Route exact path="/mixtape" component={Mixtape} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App