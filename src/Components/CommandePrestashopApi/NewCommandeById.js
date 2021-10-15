
import { connect } from 'react-redux';
import React from 'react'
import { Card, Row, Col, Modal, notification  } from 'antd';
import { apiURL } from '../../Config/Config';

const key = 'updatable';
class NewCommandeById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId:null,
            client:null,
            visible:false,
            AdressUser:null
        };
  };
 
  componentDidMount(){
   this.setState({clientId:this.props.match.params.clientId.substr(9)});
   this.props.auth.new_command.map((item) =>  {
      console.log('iteeeeeeem',item);
       if(item && item.id == this.props.match.params.clientId.substr(9)){
        this.setState({client: item})
       }    
   })
 
  }

   openNotification = () => {
    
  };
  getAdressByUser=()=>{
    const arrayAdress=[];
    if(this.props.auth.adress && this.props.auth.adress.addresses){
        console.log(this.state);
        this.props.auth.adress.addresses.map((el)=>{
            if(this.state.clientId === el.id_customer ){
                arrayAdress.push(el)
                
            }      
        })
        
        
        return (
        <Row> { arrayAdress.map((item, index) =>
             (
             <Card>
                <Col key={index}>id :{item.id}</Col>
                <Col>costomer :{item.id_customer}</Col>
                <Col>adress1 :{item.adress1}</Col>    
                <Col>adress2 :{item.adress2}</Col>
                <Col>postcode :{item.postcode}</Col>
                <Col>city :{item.city}</Col>
                <Col>other :{item.postcode}</Col>
                <Col>phone :{item.phone}</Col>
                <Col>phone_mobile :{item.phone_mobile}</Col>
                <Col>dni :{item.dni}</Col>    
                <Col>deleted :{item.deleted}</Col>
                <Col>date added :{item.date_add}</Col>
                <Col>date update :{item.date_upd}</Col>
                <button onClick={()=>this.openModal(item)}>Dropex</button>    
            </Card>
            )) }
            </Row>)
        
        
        
    }
  }
  handleChange=async()=>{

  let formdataColis = new FormData();
  formdataColis.append("cle_api", "jaGDlA4leqHPohsxmyJg");
  formdataColis.append("code_api", "2484");
  formdataColis.append("nom_client", this.state.AdressUser.firstName+' '+this.state.AdressUser.lastName,);
  formdataColis.append("tel_l", this.state.AdressUser.phone);
  formdataColis.append("cod", this.state.AdressUser.postcode);
  formdataColis.append("gov_l", this.state.AdressUser.address1);
  formdataColis.append("adresse_l", this.state.AdressUser.city);




var requestOptions = {
  method: 'POST',
  headers:  {
    'Access-Control-Request-Headers': 'Authorization'},
  body: formdataColis,
};


 fetch("http://droppex.com/setcolisdroppex.php", requestOptions).then(response=> {
   if(response.status ==201){

    let myHeaders={'Authorization': 'Bearer '+this.props.auth.token}
    let formdata =new FormData()
      formdata.append('idCommande',this.state.client &&this.state.client.id_command)
      formdata.append('status',1)
      const requestOptions = {
        method: 'POST',
         headers: myHeaders,
        body: formdata
      };
      fetch(apiURL+'/api/changeStatusCommande',requestOptions).then(response=> {
        if(response.status ==200){
          
          this.setState({visible:false});
          notification.success({
            key,
            message: 'Notification Title',
            description: 'description.',
          });
          window.location='/nouveaux_commande'

        }
      });
   }
 }); 
    
  }
  openModal=(item)=>{
      this.setState({visible:true, AdressUser:item})
    console.log("item",item);
  }

  render() { 
      console.log('state',this.state.client &&this.state.client.id_command);
    return (<div>
        <Card title={this.state.client&&this.state.client.firstName+' '+ this.state.client.lastName }>
        <span>
            <p>{this.getAdressByUser()}</p>
        </span>
        </Card>
        <Modal
        
        closable={false}
        footer={null}
         visible={this.state.visible} >
        <p className="titleModalShipping">voulez vous affecter cette commande a Dropex ?</p>
        <button className="modalShipping-btn-confirmer" onClick={this.handleChange}>Confirmer</button>
        <button className="modalShipping-btn-cancel"onClick={()=>this.setState({visible:false})}>Cancel</button> 
      </Modal>
    </div>)
}
}
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
export default connect (mapStateToProps, mapDispatchToProps)(NewCommandeById)