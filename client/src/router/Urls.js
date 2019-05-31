import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Map from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';
import NotFound from '../components/NotFound';
import About from '../components/About';

class Urls extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Map} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forget_pass" component={Forget_pass} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Urls;
