import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
class SidebarMenu extends Component{
    render(){
        return(
            <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-logo">
                    <NavLink to="/"></NavLink>
                    <div className="sidebar-toggle-button">
                        <i className="material-icons">&#xE317;</i>
                    </div>
                </div>
                <div id="mobileMenu">
                    <div className="sidebar-seperate"></div>
                </div>
                <ul className="sidebar-menu">
                <li>
					<NavLink exact to="/" className="material-button">
						<span className="menu-icon"><i className="material-icons">&#xE88A;</i></span>
	                	<span className="menu-label">Home</span>
	                </NavLink>
					<NavLink to="/privacy" className="material-button">
						<span className="menu-icon"><i className="material-icons">&#xE038;</i></span>
	                	<span className="menu-label">Privacy</span>
	                </NavLink>
                    <NavLink to="/about-us" className="material-button">
						<span className="menu-icon"><i className="material-icons">&#xE038;</i></span>
	                	<span className="menu-label">About Us</span>
	                </NavLink>
					<NavLink to="/contact" className="material-button">
						<span className="menu-icon"><i className="material-icons">&#xE866;</i></span>
	                	<span className="menu-label">Contact</span>
	                </NavLink>
	            </li>
                </ul>
                <div className="sidebar-seperate"></div>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink to="www.facebook.com" className="facebook material-button">
                            <span className="menu-label">Facebook</span>
                        </NavLink>
                        <NavLink to="www.facebook.com" className="twitter material-button">
                            <span className="menu-label">Twitter</span>
                        </NavLink>
                        <NavLink to="www.facebook.com" className="google-plus material-button">
                            <span className="menu-label">Google +</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SidebarMenu