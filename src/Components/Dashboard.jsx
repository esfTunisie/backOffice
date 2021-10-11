import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Table, Input, Button, Space } from 'antd';
import { apiURL } from "../Config/Config";
import { Link } from 'react-router-dom';



const Dashboard =()=>{
    const [data, setData] = useState('')
    useEffect(() => {
        console.log("hereeee");
        getData()
      
       
    }, []);

    const getData =async()=>{
        const requestOptions = {
            method: 'GET',
           
          };
        const data = await fetch(apiURL+"/getNewEntreprise",requestOptions);
        if(data.status == 200){
            const dataJson = await data.json()
            setData(dataJson)
            console.log(dataJson);
        }

    }
    const columns = [
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'firstName',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
            title: 'lastName',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Action',
            render: (text, record) => (
              <Space size="middle">
                <Link to={`/userInfomration/userId=${record.id}`} onClick={console.log('record',record)} >consulter </Link>
              </Space>)
          },
       
      ];
    return(
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )

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
      
export default Dashboard;