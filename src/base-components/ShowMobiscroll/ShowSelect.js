import React,{Component}from 'react';
import { ActionSheet } from 'antd-mobile';
import InputMobi from "../InputMobi/InputMobi";
class ShowSelect extends Component{
    constructor() {
        super();
        this.state = {
          clicked: '',
        };
      }
    
    showActionSheet = () => {
        const selectOption = this.props.selectOption;
        ActionSheet.showActionSheetWithOptions({
          options: selectOption,
          message: '',
          maskClosable: true,
          'data-seed': 'logId'
        },
        (buttonIndex) => {
          this.setState({ clicked: selectOption[buttonIndex] });
        });
      }
      render(){
        return(
          <div onClick={this.showActionSheet} >
             <InputMobi iconClass={this.props.iconClass} classTxt = {this.props.classTxt} labelTxt={this.props.labelTxt} selectValue={this.state.clicked}/>
          </div>
        );

      }
};
export default ShowSelect;