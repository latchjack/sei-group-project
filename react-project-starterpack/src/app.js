import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/main.scss'
import Register from './auth/Register'
import Login from './auth/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import TrailNew from './TrailNew'
import CompleteForm from './CompleteForm'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        
        <Route path="/register"component={Register}/>
        <Route path="/login"component={Login} />
        <Route path="/trails/new"component={TrailNew} />
        <Route path="/trails/:id/complete"component={CompleteForm}/>
        
      </Switch>

    </main>
  </BrowserRouter>
  
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)