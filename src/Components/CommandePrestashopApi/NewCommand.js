import { Table, Input, Button, Space, Tag, Modal, Radio  } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom';







class NewCommand extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    visible:false,
    value:1
  };

 


  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
   showModal = () => {
    this.setState({visible:true});
  };

   handleOk = () => {
    this.setState({visible:false});
  };

   handleCancel = () => {
    this.setState({visible:false});
  };
   onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({value:e.target.value});
  };


  render() {
    const fakeData = [
      {
        "firstName": "Shifti",
        "lastName": "Tunisie",
        "email":"shifti@shifti.co",
        "payment":"comptant",
        "montant": "99.900",
        "référence":"A22",
        "date_add":"08/10/2021",
        "status":"New",
      },
      {
        "firstName": "Shifti",
        "lastName": "Tunisie",
        "email":"shifti@shifti.co",
        "payment":"comptant",
        "montant": "99.900",
        "référence":"A22",
        "date_add":"08/10/2021",
        "status":"En cours",
      },
      {
        "firstName": "Shifti",
        "lastName": "Tunisie",
        "email":"shifti@shifti.co",
        "payment":"comptant",
        "montant": "99.900",
        "référence":"A22",
        "date_add":"08/10/2021",
        "status":"Livré",
      }
    ]

    const columns = [
        {
          title: 'Nom',
          dataIndex: 'firstName',
          key: 'firstName',
          width: '20%',
          ...this.getColumnSearchProps('firstName'),
          
        },
        {
            title: 'Prénom',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '20%',
            ...this.getColumnSearchProps('lastName'),
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '25%',
            ...this.getColumnSearchProps('email'),
          },
          {
            title: 'Méthode de paiment',
            dataIndex: 'payment',
            key: 'payment',
            width: '25%',
            ...this.getColumnSearchProps('payment'),
          },
          {
            title: 'Montant',
            dataIndex: 'montant',
            key: 'montant',
            width: '30%',
            ...this.getColumnSearchProps('montant'),
          },
          {
            title: 'Référence',
            dataIndex: 'référence',
            key: 'référence',
            width: '20%',
            ...this.getColumnSearchProps('référence'),
          },
          {
            title: 'Date du commande',
            dataIndex: 'date_add',
            key: 'date_add',
            width: '30%',
            ...this.getColumnSearchProps('date_add'),
          },
          // {
          //   title: 'date de modification',
          //   dataIndex: 'date_update',
          //   key: 'date_update',
          //   width: '30%',
          //   ...this.getColumnSearchProps('date_update'),
            
          // },
            {
            title: 'status',
            
            key: 'status',
            width: '30%',
            ...this.getColumnSearchProps('status'),
            dataIndex: 'status',
            render: status => (
              <span>
                    <Tag color={status == "New"?'volcano': status =='En cours'?'geekblue': 'green'} key={status}>
                      {status.toUpperCase()}
                    </Tag>
              </span>)
            
          },
          {
            title: 'Action',
            width: '30%',
            render: (text, record) => (
              <Space size="middle">
                <div style={{cursor:"pointer"}}  onClick={()=>this.setState({visible:true})} >Livrer </div>
              </Space>)
          },


          

      ];
    // return <Table columns={columns} dataSource={this.props.auth.new_command} style={{overflow:"scroll", width:"100%"}} />;
    return(
      <>
      <Modal title="Livraison" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
      <Radio.Group onChange={this.onChange} value={this.state.value}>
      <Radio value={1}>Dropex</Radio>
      <Radio value={2}>Poste</Radio>
      <Radio value={3}>Aramex</Radio>
      <Radio value={4}>Tunisia-express</Radio>
    </Radio.Group>
    </Modal>
       <Table columns={columns} dataSource={fakeData} style={{overflow:"scroll", width:"100%"}} />
       </>);
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
export default connect (mapStateToProps, mapDispatchToProps)(NewCommand)