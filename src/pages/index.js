import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LadPages from './ladingpages/ladPages.jsx'
import Register from './register/register.jsx'
import Login from './login/login.jsx'

const Index = () => {
    return (
        <Router>

            <Switch>
                <Route path="/" exact component={LadPages} />
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </Switch>

        </Router>
    )
}

export default Index