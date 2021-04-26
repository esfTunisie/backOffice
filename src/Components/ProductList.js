import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import React from 'react'

class ProductList extends React.Component{

    
    state = {
        searchText: '',
        searchedColumn: '',
        
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
    
      render() {
    
        const columns = [
            {
              title: '#',
              dataIndex: 'id',
              key: 'id',
              width: '20%',
              ...this.getColumnSearchProps('id'),
            },
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
                width: '20%',
                ...this.getColumnSearchProps('name'),
              },
              {
                title: 'price',
                dataIndex: 'price',
                key: 'price',
                width: '25%',
                ...this.getColumnSearchProps('price'),
              },
              {
                title: 'reference',
                dataIndex: 'reference',
                key: 'reference',
                width: '25%',
                ...this.getColumnSearchProps('reference'),
              },  
    
          ];
        return <Table columns={columns} dataSource={this.props.auth.product} style={{overflow:"scroll", width:"100%"}} />;
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
    export default connect (mapStateToProps, mapDispatchToProps)(ProductList)
