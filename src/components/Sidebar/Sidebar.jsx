import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
 class Sidebar extends Component {
     render(){
         return(
            <div className="content-sidebar">
            <div className="sidebar_inner">
                
                <div className="sidebar-spacer"></div>
                <div className="sidebar-button-group">
                    <NavLink exact to="/" className="sidebar-buttons material-button"><i className="material-icons">&#xE851;</i><span className="btn-label">Home</span></NavLink>
                    <NavLink to="/about-us" className="sidebar-buttons material-button"><i className="material-icons">&#xE894;</i><span className="btn-label">About</span></NavLink>
                    <NavLink to="/privacy" className="sidebar-buttons material-button"><i className="material-icons">&#xE87F;</i><span className="btn-label">Privacy Policy</span></NavLink>
                    <NavLink to="/contact" className="sidebar-buttons material-button"><i className="material-icons">&#xE894;</i><span className="btn-label">Contacts</span></NavLink>
                </div>

            </div>
        </div>
         )
     }
 }

 export default Sidebar