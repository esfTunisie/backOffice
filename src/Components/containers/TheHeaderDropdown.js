import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'



class TheHeaderDropdown extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }

    logOut =()=>{
        const action = {type:"LOGOUT",
        token: null,
        client: null,
        new_command:null,
        current_command:null,
        canceled_command:null,
        steps1:{},
        steps2:{},
        steps3:{},
        product:null,
        isLogIn:false}
        this.props.dispatch(action)
        window.location='/';
    }

 render () {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        Profile
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
            <Link to='/upgrade'>Updates</Link> 
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        > 
         <strong>Settings</strong>
        </CDropdownItem>
        <Link to="/account-information">
        <CDropdownItem>
        <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        </Link>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={this.logOut}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          LogOut
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
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

export default connect (mapStateToProps, mapDispatchToProps) (TheHeaderDropdown)
