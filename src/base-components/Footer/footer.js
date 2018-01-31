import React,{Component}from 'react';
import FooterItem from './footer-item';
import {NavLink } from "react-router-dom";
import FooterData from './data.json';


import './footer.css';
class FootDom extends Component{
 
    render(){
        return(
               <div>
                    <div className="footDiv border-t">
                        {FooterData.data.map(function(ft,index){
                            return(<NavLink  key={index} to={ft.link}  activeClassName="active-footer-item"><FooterItem txt={ft.txt} icon={ft.onIcon}/></NavLink>); 
                        })
                        }
                    </div>
             
               </div>
        )
    }
}
export default FootDom;