import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../components/Home/Home'
import Privacy from '../components/Privacy/Privacy'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
class Approute extends Component {
    render(){
        return(
            <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about-us" component={About} />
                        <Route path="/privacy" component={Privacy} />
                        <Route path="/contact" component={Contact} />

                    </Switch>

            </Router>
        )
    }
}

export default Approute