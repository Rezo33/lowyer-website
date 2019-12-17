import '../scss/main.scss';
import React, {Component}          from 'react';
import ReactDOM                    from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import LayoutContainer from './pages/components/layout/Layout';
import HFLayout from './pages/components/layout/HeaderFooterLayout';
import {Error} from './pages/Error';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <LayoutContainer exact path='/' layout={HFLayout} component={Main}/>
                    <LayoutContainer exact path='/media' layout={HFLayout} component={Contacte}/>
                    <LayoutContainer exact path='/menu' layout={HFLayout} component={DespreNoi}/>
                    <LayoutContainer exact path='/menuEdit' layout={HFLayout} component={EchipaNoastra}/>
                    <Route component={Error}/>
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <App/>
    ,document.getElementById('root')
);