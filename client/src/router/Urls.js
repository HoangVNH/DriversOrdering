import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Map from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Info from '../components/Info';
import Edit_Info from '../components/Edit_Info';

class Urls extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/" exact component={Map} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login/forget_pass" exact component={Forget_pass} />
                    <Route path="/about" exact component={About} />
                    <Route path="/info" exact component={Info} />
                    <Route path="/info/edit_info" exact component={Edit_Info} />
                    <Route component={NotFound} />
                </Switch>
        );
    }
}

export default Urls;
