import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Home from './common/Home'
import Navbar from './common/Navbar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
      </BrowserRouter>
     
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)