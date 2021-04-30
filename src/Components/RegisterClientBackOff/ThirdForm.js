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
      offreData : ['starter', 'market growth','pionner','gold'],
      shopsData: ["shop one",'shop two','shop three', 'shop four']
      
             };
  }
  handleOffreChange(e){
    const action ={type:"OFFRE",value:e,}
    this.props.dispatch(action)
  }

  handleShopsChange(e){
    const action ={type:"SHOPS",value:e,}
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
        <Select defaultValue={this.state.offreData[0]} style={{ width: 600 }} onChange={(e)=>this.handleOffreChange(e)}>
        {this.state.offreData.map(offre => (
          <Option key={offre}>{offre}</Option>
        ))}
      </Select>

 
        </Form.Item>

        <Form.Item label="Templates">
        <Select defaultValue={this.state.shopsData[0]} style={{ width: 600 }} onChange={(e)=>this.handleShopsChange(e)}>
        {this.state.shopsData.map(shop => (
          <Option key={shop}>{shop}</Option>
        ))}
      </Select>
        
        </Form.Item>
      
       

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