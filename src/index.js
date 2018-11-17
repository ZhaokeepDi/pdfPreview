import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import asyncComponent from './componse/js/bundle';
import {
    BrowserRouter,
    Link, Route,Switch
} from "react-router-dom"

const AsyncHome = asyncComponent(() => import("./App"));
// console.log(AsyncHome)
ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route strict path="/index" component={asyncComponent(() => import("./App"))}>
            </Route>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
// ReactDOM.render(<Clafirst name="chen" />, document.getElementById('root'))
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
