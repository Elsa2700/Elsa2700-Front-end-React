import React from "react";
import MyForm from "./components/form.js";
import { Link } from 'react-router-dom';
 

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="ListPage">
            <MyForm />
            <div className="HomePagebtn">
                <Link to={{pathname:'/'}}>
                    <button>返回首頁</button>
                </Link>
            </div>
        </div>
    }
}
export default ListPage;
