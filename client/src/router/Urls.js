import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Map from '../components/Map';
import MyMap from '../components/Map';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Forget_pass from '../components/Forget_pass';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Info from '../components/Info';
import ListDriver from '../components/admin/ListDriver';

class Urls extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={MyMap} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login/forget_pass" exact component={Forget_pass} />
                <Route path="/about" exact component={About} />
                <Route path="/info" exact component={Info} />
                <Route path="/admin/list_driver" exact component={ListDriver} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Urls;
