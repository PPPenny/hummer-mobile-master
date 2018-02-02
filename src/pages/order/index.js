import React,{Component}from 'react';
import Header from "../../base-components/Header/index";
import AdImg from './img/ad.png';
import AgentImg from './img/agent.png';
import CarImg from './img/car.png';
import DivItem from './DivItem';
import './index.css';
 class OrderIndex extends Component{
     render(){
         return(
              <div id="order">
                  <Header title='下单'/>
                  <div className='container'>
                   <img className='adDiv' src ={AdImg} alt="广告"/> 
                   <div className="title">
                        <div className="banner go-next-btn"></div>
                        <div className="title-txt">长安汽车旗下官方平台值得信赖</div>
                    </div>
                    <DivItem dataSrc={AgentImg} title="金融下单" txt="分期开好车，轻松无忧负担小" dataLink="/my/feedBack"/>
                    <DivItem dataSrc={CarImg} title="整车下单" txt="无忧购车，好买好退" dataLink="/my/notice"/>
                  </div>
              </div>
          );
     }
 }
 export default OrderIndex;