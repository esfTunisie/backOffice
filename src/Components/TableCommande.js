import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import React from 'react'
import { apiURL } from '../Config/Config';




class TableCommande extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    dataCommande:null
    
  };
componentDidMount(){
    this.getCurrentCommande()
}


getCurrentCommande=() =>{
    console.log("test1");
    fetch(apiURL+'/api/getCurrentCommande')
    .then(response => response.json()).then(data => this.setState({ dataCommande:data }));
    
    
}
 


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

  render() {
    console.log("hello",this.state.data);
    const columns = [
        {
          title: 'Nom',
          dataIndex: 'firstName',
          key: 'firstName',
          width: '20%',
          ...this.getColumnSearchProps('firstName'),
        },
        {
            title: 'Pr??nom',
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
            title: 'M??thode de paiment',
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
            title: 'R??f??rence',
            dataIndex: 'r??f??rence',
            key: 'r??f??rence',
            width: '20%',
            ...this.getColumnSearchProps('r??f??rence'),
          },
          {
            title: 'Date du commande',
            dataIndex: 'date_add',
            key: 'date_add',
            width: '30%',
            ...this.getColumnSearchProps('date_add'),
          },
          {
            title: 'date de modification',
            dataIndex: 'date_update',
            key: 'date_update',
            width: '30%',
            ...this.getColumnSearchProps('date_update'),
          },

      ];
    return <Table columns={columns} dataSource={this.state.dataCommande} style={{overflow:"scroll", width:"100%"}} />;
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
export default connect (mapStateToProps, mapDispatchToProps)(TableCommande)