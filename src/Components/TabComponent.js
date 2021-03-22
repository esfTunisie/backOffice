import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { apiURL } from '../Config/Config';

class TabComponent extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      data_client: {}};
  }
  getClient =()=>{
  
   const data = fetch(apiURL+'getClients')
    .then(response => response.json()).then(data => this.setState({ data:data }));
  }
  test= ()=>{
      this.getClient()
     //const  item = this.setState({ data_client: data});
     
  
      
    
    let action ={
      value: this.state.data_client,
      type:'test',
      
    }
    
    this.props.dispatch(action)
  }

    render(){
        console.log(this.state.data);
        return(
            <Tabs>
        <TabList>
          <Tab onClick={this.test}>Title 1</Tab>
          
          <Tab>Title 2</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    )
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
    export default connect (mapStateToProps, mapDispatchToProps)(TabComponent)
    