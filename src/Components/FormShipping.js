import { Select,Input,Form, Button } from 'antd'
import { Option } from 'antd/lib/mentions';

import React, { Component } from 'react'

const { TextArea } = Input;

export class FormShipping extends Component {

    constructor(props){
        super(props);
        this.state = {
          
          govData : [    
           " Gouvernorat de l'Ariana",
          "Gouvernorat de Béja",
         " Gouvernorat de Ben Arous",
          "Gouvernorat de Bizerte",
          "Gouvernorat de Gabès",
          "Gouvernorat de Gafsa",
          "Gouvernorat de Jendouba",
          "Gouvernorat de Kairouan",
          "Gouvernorat de Kasserine",
          "Gouvernorat de Kébili",
          "Gouvernorat du Kef",
         " Gouvernorat de Mahdia",
          "Gouvernorat de Manouba",
          "Gouvernorat de Médenine",
          "Gouvernorat de Monastir",
          "Gouvernorat de Nabeul",
         " Gouvernorat de Sfax",
          "Gouvernorat de Sidi Bouzid",
          "Gouvernorat de Siliana",
          "Gouvernorat de Sousse",
          "Gouvernorat de Tataouine",
          "Gouvernorat de Tozeur",
          "Gouvernorat de Tunis",
          "Gouvernorat de Zaghouan"],
          "nom":"",
          "numtel1":"",
          "numtel2":"",
          "adresse":"",
          "gov":"",
          "codeColis":"",
          "remarque":"",
          errors:{}

         
          
                 };
      }

      handleValidationShipping(){
        let nom = this.state.nom
        let numtel1 = this.state.numtel1
        let adresse = this.state.adresse
        
        let codeColis = this.state.codeColis
        

        let errors ={}
        let formIsValid = true
        
        if(!nom){
            formIsValid = false
            errors["nom"] = "merci de remplir le nom et le prénom du client"
        }
        if(!numtel1){
            formIsValid = false
            errors["numtel1"] = "merci de remplir le numéro de téléphone du client"
        }
        if(!adresse){
            formIsValid = false
            errors["adresse"] = "merci de remplir l'adresse du client"
        }
        if(!codeColis){
            formIsValid = false
            errors["codeColis"] = "merci de remplir le code de colis du client"
        }
        
        this.setState({errors: errors});
       return formIsValid;
      }

      handleSubmitShipping(){
          if(this.handleValidationShipping()){
              console.log("submitted form shipping");
          }else{
              console.log("submit error");
          }
      }

    render() {
        return (
         <>   
    <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 15,
    }}
    layout="horizontal"
   
   
   
    className="ant-form-pers"
  >
    <Form.Item  label="Nom et prénom du client" name="name" >
    <Input onChange={(e)=>this.setState({nom: e.target.value})}/>
    <span style={{color: "red"}}>{this.state.errors["nom"]}</span>
  </Form.Item>
      

      <Form.Item  label="Numéro télephone (1)" name="numtel1" >
      <Input onChange={(e)=>this.setState({numtel1: e.target.value})}/>
      <span style={{color: "red"}}>{this.state.errors["numtel1"]}</span>
    </Form.Item>

    <Form.Item  label="Numéro télephone (2)" name="numtel2" >
    <Input onChange={(e)=>this.setState({numtel2: e.target.value})}/>
  </Form.Item>
      

      <Form.Item  label="Adresse du client" name="adresse" >
        <Input onChange={(e)=>this.setState({adresse: e.target.value})}/>
        <span style={{color: "red"}}>{this.state.errors["adresse"]}</span>
      </Form.Item>
     
      <Form.Item label="Gouvernorat">
      <Select defaultValue={this.state.govData[0]} style={{ width: 682 }}  onChange={(e)=>this.setState({gov: e})} >
      {this.state.govData.map(gov => (
        <Option key={gov}>{gov}</Option>
      ))}
    </Select>


      </Form.Item>
     
      <Form.Item label="Code de colis" name="codeColis" >
      <Input onChange={(e)=>this.setState({codeColis: e.target.value})}/>
      <span style={{color: "red"}}>{this.state.errors["codeColis"]}</span>
    </Form.Item>
    <Form.Item label="Remarque" name="remarque" >
    <TextArea onChange={(e)=>this.setState({remarque: e.target.value})} />
  </Form.Item>
  <Button
  type="primary"
       size="middle"
  onClick={this.handleSubmitShipping.bind(this)}
  style={{marginLeft:"50%"}}
>
  Submit
</Button>
   </Form>

   </>
        )
    }
}

export default FormShipping
