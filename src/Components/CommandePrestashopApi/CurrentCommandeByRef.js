
import { connect } from 'react-redux';
import React from 'react'
import { Card } from 'antd';

class CurrentCommandeByRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientRef:null,
            client:null
        };
   
  };
  componentDidMount(){
   this.setState({clientRef:this.props.match.params.clientRef.substr(10)});
   this.props.auth.current_command.map((item) =>  {
     
       if(item && item.référence == this.props.match.params.clientRef.substr(10)){
        this.setState({client: item})
       }
       
   })
  
  }

  render() {
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
export default connect (mapStateToProps, mapDispatchToProps)(CurrentCommandeByRef)