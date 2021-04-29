import React from 'react';
import {
  Form,
  Select,
} from 'antd';
import { connect } from 'react-redux';



class ThirdForm extends React.Component {
  //const [componentSize, setComponentSize] = useState('default');
  constructor(props){
    super(props);
    this.state = {
      componentSize: 'default',
      offreData : ['starter', 'market growth','pionner','gold']
      
             };
  }
  handleOffreChange(e){
    const action ={type:"OFFRE",value:e,}
    this.props.dispatch(action)
  }

 render(){
  const { Option } = Select;
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"

       
      
        className="ant-form-pers"
      >
        <Form.Item label="Offre">
        <Select defaultValue={this.state.offreData[0]} style={{ width: 120 }} onChange={(e)=>this.handleOffreChange(e)}>
        {this.state.offreData.map(offre => (
          <Option key={offre}>{offre}</Option>
        ))}
      </Select>

         {/* <Select   >
            <Select.Option value={this.props.stepThreeData.offre}>Starter</Select.Option>
            <Select.Option value={this.props.stepThreeData.offre}>Market Growth</Select.Option>
            <Select.Option value={this.props.stepThreeData.offre}>pioneer</Select.Option>
            <Select.Option value={this.props.stepThreeData.offre}>Gold</Select.Option>
         </Select>*/}
        </Form.Item>
       {/* this.props.stepThreeError[0]&&<div style={{color:'red'}}>{this.props.stepThreeErrorMsg[0]}</div>*/}
        <Form.Item label="magasins">
          <Select >
              <Select.Option value="shop one">Shop 1</Select.Option>         
              <Select.Option value="shop2">Shop 2</Select.Option>
              <Select.Option value="shop3">Shop 3</Select.Option>
              <Select.Option value="shop4">Shop 4</Select.Option>
          </Select>
        </Form.Item>
        { /**this.props.stepThreeError[1]&&<div style={{color:'red'}}>{this.props.stepThreeErrorMsg[1]}</div> */ }
      </Form>
    </>
  );
 }
  
};



const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
return {
dispatch: (action) => {
dispatch(action);
},
};
};
export default connect (mapStateToProps, mapDispatchToProps)(ThirdForm)