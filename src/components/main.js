import React from "react";
import { Link } from 'react-router-dom';
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className = "main">
            <Link to={{pathname:'/ListPage'}}>
                <button>點此開始</button>
            </Link>
        </div>
    }
}
export {Main};