import React from 'react'
import "./style/styleHomePage.css";
import "./style/styleListPage.css";
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';


function App(){
    return (
        <Router basename='/Elsa2700-Front-end-React'>
        <div>
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/ListPage" component={ListPage} />
            </Switch>
        </div>
        </Router>
    )
}



export default App;