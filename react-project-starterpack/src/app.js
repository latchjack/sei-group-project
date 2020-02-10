import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/main.scss'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import TrailNew from './components/trails/TrailNew'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Trails from './components/trails/TrailIndex'
import TrailCard from './components/trails/TrailShow'
import CompleteForm from './components/trails/CompleteForm'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import FAQ from './components/common/FAQ'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/"component={Home}/>
            <Route path="/trails/:id/complete"component={CompleteForm}/>
            <Route path="/trails/new"component={TrailNew} />
            <Route path="/trails/:id" component={TrailCard}/>
            <Route path="/trails" component={Trails}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route exact path="/" component={Home}/>
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