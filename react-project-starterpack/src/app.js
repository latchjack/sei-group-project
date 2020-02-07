import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD

=======
import { BrowserRouter, Route, Switch } from 'react-router-dom'
>>>>>>> development
import 'bulma'
import './styles/main.scss'
import Register from './auth/Register'
import Login from './auth/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'



const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        
        <Route path="/register"component={Register}/>
        <Route path="/login"component={Login} />
        
      </Switch>

    </main>
  </BrowserRouter>
  
)

<<<<<<< HEAD
=======
import Home from './common/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
      </BrowserRouter>
     
    )
  }
}
>>>>>>> development

ReactDOM.render(
  <App />,
  document.getElementById('root')
)