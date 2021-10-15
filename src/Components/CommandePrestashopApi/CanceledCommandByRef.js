
import { connect } from 'react-redux';
import React from 'react'
import { Card } from 'antd';

class CanceledCommandByRef extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientRef:null,
            client:null
        };
   
  };
  componentDidMount(){
   this.setState({clientRef:this.props.match.params.clientRef.substr(10)});
   this.props.auth.canceled_command.map((item) =>  {
       console.log(item);
     
       if(item && item.référence == this.props.match.params.clientRef.substr(10)){
        this.setState({client: item})
       }
       
   })
  
  }

  render() {
      console.log(this.state.client && this.state.client );
    return(
     <div>
        <Card title={this.state.client&&this.state.client.firstName+' '+ this.state.client.lastName }> </Card>

    </div>
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
export default connect (mapStateToProps, mapDispatchToProps)(CanceledCommandByRef)