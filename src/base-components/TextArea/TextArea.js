import React,{Component}from 'react';
import { List, TextareaItem  } from 'antd-mobile';
class Textarea extends Component{
    
render=()=>{
    var TextareaStyle = {
        fontSize: '14px'
    }
    return(
        <List renderHeader={() => ''}>
         <TextareaItem
        placeholder="请输入"
        rows={this.props.TextareaRow}
        count={this.props.TextareaCount}
        style={TextareaStyle}
        />
      </List>
    
    
   );

}
}
export default Textarea;