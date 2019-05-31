import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Map from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Info from '../components/Info';

class Urls extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Map} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forget_pass" component={Forget_pass} />
                    <Route path="/about" component={About} />
                    <Route path="/info" component={Info} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Urls;
