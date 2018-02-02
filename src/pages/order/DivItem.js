import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import './index.css';
class DivItem extends Component{
    render(){
        return(<div className="show-div border-t">     
                <img className="img-img" src={this.props.dataSrc}/>
                <div className="show-tips">
                    <div className="show-title">{this.props.title}</div>
                    <div className="tip-txt">{this.props.txt}</div>
                </div>
                <Link to={this.props.dataLink} className="show-btn btn-sm go-next-btn">去下单</Link>  
                </div>       
               );
    }
}
export default DivItem;
