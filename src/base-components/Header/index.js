import React,{Component}from 'react';
import './index.css';
import {withRouter} from "react-router-dom"

class Header extends Component{
    // constructor(props){
    //     super(props);
    //     // this.goPre = this.goPre.bind(this);
    // }
    goPre=()=>{
    //    const {history} = this.props;
       this.props.history.goBack();
       
    };
    render(){
        return(
            <header className="header">
                <i className={"icon-left "+this.props.iconLeftClass } onClick={this.goPre}/>
                <h1>{this.props.title}</h1>
                
            </header>
        )
    }
}
export default withRouter(Header);