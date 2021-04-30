
import { connect } from 'react-redux';
import React from 'react'
import { Card } from 'antd';

class NewCommandeById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId:null,
            client:null
        };
   
  };
  componentDidMount(){
   this.setState({clientId:this.props.match.params.clientId.substr(9)});
   this.props.auth.new_command.map((item) =>  {
     
       if(item && item.id == this.props.match.params.clientId.substr(9)){
        this.setState({client: item})
       }
       
   })
  
  }

  render() {
    console.log(this.state.client && this.state.client);
    return <div>
        <Card title={this.state.client&&this.state.client.firstName+' '+ this.state.client.lastName }>


            
        </Card>

    </div>
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