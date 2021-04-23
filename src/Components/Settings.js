import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Settings extends Component {
    render() {
        return (
            <div className="upgrade_section">
                <h1>upgrade your offer :</h1>
               <Link to='/upgrade'>  <button class="btn btn-success btn-md button_upgrade_style" type="button">Upgrade</button></Link>
            </div>
        )
    }
}
