
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Modal, notification, Space  } from 'antd';
import { apiURL } from '../../Config/Config';
import { Link } from 'react-router-dom';
import image1 from '../../assets/icons/image/baskets-homme-marron.jpg'

const key = 'updatable';
const ProduitClient =(props)=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState('')
    const [userId, setUserId] = useState('')
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setUserId(props.match.params.userId.substr(7))
        // userInformationById(props.match.params.userId.substr(7))
        
        
    }, []);
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      const showModal = () => {
        setIsModalVisible(true);
      };
    const getImageProduit = async(id)=>{
        // const requestOptions = {
        //     method: 'GET',
        //   };
        //   const data = await fetch(apiURL+"/getNewEntreprise/"+id, requestOptions);
        // if(data.status == 200){
        //     const dataJson = await data.json();
        //     setData(dataJson);
        // }
    }
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
      },
      {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'prix',
          dataIndex: 'prix',
          key: 'prix',
        },
        {
          title: 'quantite',
          dataIndex: 'quantite',
          key: 'quantite',
        },
        {
          title: 'Action',
          render: (text, record) => (
            <Space size="middle">
              <Link to={`/userInfomration/userId=${record.id}`} onClick={console.log('record',record)} >consulter </Link>
            </Space>)
        },
     
    ];
   


    return (<div>
        
      <Modal  title="Photos article" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <img width={"50%"} src={image1} />
      </Modal>

        
        <Card title={data && data.firstName }>
        {/* <p> categorie Produit :{data && data["categorieProduits"].map(({ id,name})=>(
            // <p>{name}</p>
            <p>Espadrilles Homme</p>
        ))}</p> */}
        <p>categorie Produit :<p>Espadrilles Homme</p></p>
        {/* <p>Produit :{data && data["produits"].map(({ id,name, type, description, prix, quantite})=>(
               ))}</p> */}
            <Row>
            <Col span={12}>
            <div>
            {/* <p>name:{name}</p>
            <p>type:{type}</p>
            <p>description:{description}</p>
            <p>prix:{prix}</p>
            <p>quantite:{quantite}</p> */}
            <p>name : Espadrilles Homme Marrons</p>
            <p>Référence: A22</p>
            <p>prix : 83,000 TND</p>
            <p>quantite : 20</p>
            <p className="button-voir-image" onClick={showModal}>voir les photos</p>
           
            </div>
       
            </Col>
            </Row>
         

       
      
        
        </Card>
        <Modal
        
        closable={false}
        footer={null}
         visible={visible} >
        <p className="titleModalShipping">voulez vous affecter cette commande a Dropex ?</p>
        {/* <button className="modalShipping-btn-confirmer" onClick={this.handleChange}>Confirmer</button>
        <button className="modalShipping-btn-cancel"onClick={()=>this.setState({visible:false})}>Cancel</button>  */}
      </Modal>
    </div>)
}



const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {
        dispatch(action);
        },
    };
};
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        };
    };

export default connect (mapStateToProps, mapDispatchToProps)(ProduitClient)