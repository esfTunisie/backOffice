import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { apiURL } from '../Config/Config';

class TabComponent extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      commandes: {}    };
  }
  componentDidMount() {
    this.getCurrentCommande();
}

 getCurrentCommande() {
   fetch(apiURL+'/getCurrentCommande')
  .then(response => response.json()).then(data => this.setState({ data:data }))
   
    
    
}

    render(){
        console.log(this.state);
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
    