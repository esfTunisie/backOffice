
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Modal, notification  } from 'antd';
import { apiURL } from '../Config/Config';
import { Link } from 'react-router-dom';

const key = 'updatable';
const UserInfomrmation =(props)=>{
    const [data, setData] = useState('')
    const [userId, setUserId] = useState('')
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setUserId(props.match.params.userId.substr(7))
        userInformationById(props.match.params.userId.substr(7))
        
        
    }, []);

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
    const userInformationById =async(id)=>{
        const requestOptions = {
            method: 'GET',
          };
        const data = await fetch(apiURL+"/getNewEntreprise/"+id, requestOptions);
        if(data.status == 200){
            const dataJson = await data.json();
            setData(dataJson);
            const action = {type:"GET_CURRENT_CLIENT", value:dataJson}
            props.dispatch(action)
        }
    }
    console.log("dataaaa",data);


    return (<div>
        <Card title={data && data.firstName }>
            <Row>
            <Col span={12}>
            <p>email :{data && data.email}</p>
            <p>status :{data && data.actif == true ? "actif" : "non actif"}</p>
            <p>phone :{data && data.userInformation.phone}</p>
            <p>adresse :{data && data.userInformation.adresse}</p>
            <p>numéro de rue :{data && data.userInformation.numberRue}</p>
            <p>nom du rue :{data && data.userInformation.rue}</p>
            <p>ville :{data && data.userInformation.ville}</p>
            <p>code postale :{data && data.userInformation.codePostal}</p>
            <p>nom de l'Entreprise{data && data.userInformation.nomEntreprise}</p>
            <p>secteur d'Activite{data && data.userInformation.secteurActivite}</p>
            <p>produit :{data && data.userInformation.produit}</p>
            <p>chiffre d'Affaire{data && data.userInformation.chiffreAffaire}</p>
            <p>site web personnel{data && data.userInformation.webSite}</p>
        </Col>
        <Col span={12}>
        <p> categorie Produit :{data && data["categorieProduits"].map(({ id,name})=>(
            <p>{name}</p>
        ))}</p>
        {/* <p>Produit :{data && data["produits"].map(({ id,name, type, description, prix, quantite})=>(
            <div>
            <p>name:{name}</p>
            <p>type:{type}</p>
            <p>description:{description}</p>
            <p>prix:{prix}</p>
            <p>quantite:{quantite}</p>
            </div>
        ))}</p> */}
        <Link to={`/produit/userId=${userId}`} >consulter les produit </Link>

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

export default connect (mapStateToProps, mapDispatchToProps)(UserInfomrmation)