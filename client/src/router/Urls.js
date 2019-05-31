import React, { Component } from './node_modules/react';
import { Route } from './node_modules/react-router'

import Map from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';

class Urls extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Map} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/forget_pass" exact component={Forget_pass} />
            </div>
        );
    }
}

export default Urls;
