import React,{Component}from 'react';
import Header from '../../base-components/Header/index';
import ShowSelect from '../../base-components/ShowMobiscroll/ShowSelect';
import selectOption from './json/selectOptin.json';
import TextArea from '../../base-components/TextArea/TextArea';
import { Button} from 'antd-mobile';
class FeedBack extends Component{
    
    render(){
        let containerCss={
            position: 'absolute',
            top: '10px',
            right: '0',
            bottom: '0',
            left: '0',
            overflow: 'auto',
            backgroundColor: '#f0f0f0',
          }
        return(<div id="feedback">
                <Header title="问题反馈" iconLeftClass="icon-arrow-left" />
                <div className="container" style={containerCss}>
                <ShowSelect iconClass="icon-arrow-down" classTxt="select-questoin" labelTxt="问题类型" selectOption={selectOption} /> 
                <TextArea TextareaRow="7" TextareaCount="200"/>
                <Button type="primary" inline className="go-next-btn"  style={{ position: 'absolute',bottom:'0',width:'100%',borderRadius:'0px'}}>提交反馈</Button>
                </div>
            </div>
            )
    }

}
export default FeedBack;