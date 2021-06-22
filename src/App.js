import React from 'react'
import "./style/styleHomePage.css";
import "./style/styleListPage.css";
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App(){
    return (
        <Router>
        <div>
            <Switch>
            <Route path="/Elsa2700-Front-end-React/" exact component={HomePage} />
            <Route path="/Elsa2700-Front-end-React/ListPage" component={ListPage} />
            </Switch>
        </div>
        </Router>
    )
}



export default App;