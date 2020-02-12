import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TrailNew from './components/trails/TrailNew'
import TrailEdit from './components/trails/TrailEdit'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import TrailIndex from './components/trails/TrailIndex'
import TrailShow from './components/trails/TrailShow'
import CompleteForm from './components/trails/CompleteForm'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import FAQ from './components/common/FAQ'
import Profile from './components/common/Profile'
import ErrorPage from './components/common/ErrorPage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>

            <Route exact path="/"component={Home}/>
            <Route path="/trails/:id/edit" component={TrailEdit}/>
            <Route path="/trails/:id/complete"component={CompleteForm}/>
            <Route path="/trails/:id" component={TrailShow}/>
            <Route path="/trails/new"component={TrailNew} />
            <Route path="/trails" component={TrailIndex}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/register"component={Register}/>
            <Route path="/login"component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path='/*' component={ErrorPage} />
            
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