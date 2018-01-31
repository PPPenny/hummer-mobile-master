import React,{Component}from 'react';
import './notice.css';
import Header from '../../base-components/Header/index';
 class Notice extends Component{
     render(){
         return(<div id="notice">
             <Header title="公告" iconLeftClass="icon-arrow-left" />
             <div className="container">
                  公告页面
            </div>
             </div>
            );
     }
 }
 export default Notice;