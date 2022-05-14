import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Main from './pages/main'

import Header from './components/Header'
import Muscles from './components/Muscles'


const Routes = () => (
    <BrowserRouter>
    <Header />
    <Muscles />
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
    </BrowserRouter>
);

export default Routes;