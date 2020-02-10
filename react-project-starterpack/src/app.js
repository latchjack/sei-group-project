import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/main.scss'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import TrailNew from './trails/TrailNew'
import Home from './common/Home'
import Navbar from './common/Navbar'
import Trails from './trails/Trails'
import TrailCard from './trails/TrailCard'
import CompleteForm from './trails/CompleteForm'
import Register from './auth/Register'
import Login from './auth/Login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/"component={Home}/>
            <Route path="/trails/new"component={TrailNew} />
            <Route path="/trails" component={Trails}/>
            <Route path="/trails/:id" component={TrailCard}/>
            <Route path="/trails/:id/complete"component={CompleteForm}/>
            <Route path="/register"component={Register}/>
            <Route path="/login"component={Login} />
            
            
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