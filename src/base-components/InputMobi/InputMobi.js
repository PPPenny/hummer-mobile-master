import React, { Component } from 'react';
import './InputMobi.css';
class InputMobi extends Component{
 render(){
     return(<div className={"showDiv "+this.props.classTxt}>
      <label className="select-label">{this.props.labelTxt}</label>
      <input id={this.props.classTxt} placeholder ={"请选择"+this.props.labelTxt} value={this.props.selectValue} readOnly/>
      <i className={"icon-on-right "+ this.props.iconClass}></i>
     </div>)
 }
}
export default InputMobi;