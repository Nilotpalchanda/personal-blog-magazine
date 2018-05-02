import React, {Component} from 'react'
import Notification from './Notification'
import Search from './Search/Search'
import {NavLink} from 'react-router-dom'
class Menu extends Component{


    render(){
        return(
            <header className="header">
                    <div className="header-wrapper">
            
                        <div className="toggle-sidebar material-button">
                            <i className="material-icons">&#xE5D2;</i>
                        </div>
            
                        <div className="logo-box">
                            <h1>
                                <NavLink to="/" className="logo">Logo</NavLink>
                            </h1>
                        </div>
            
                        <div className="header-menu">
            
                            <ul className="header-navigation" data-show-menu-on-mobile>
                                <li>
                                    <NavLink exact to="/"   className="material-button">HOME</NavLink>
                                    <NavLink  exact to="/about-us" className="material-button">ABOUT</NavLink>
                                    <NavLink exact to="/privacy" className="material-button">PRIVACY</NavLink>
                                    <NavLink  exact to="/contact" className="material-button">CONTACT</NavLink>
                                </li>
                            </ul>
            
                        </div>
                        <div className="header-right with-seperator">
                        <ul className="header-navigation">
                            <li>
                                <NavLink to="#" className="material-button search-toggle"><i className="material-icons">&#xE8B6;</i></NavLink>
                            </li>
                            <li className="hide-on-mobile"><NavLink to="#" className="material-button" data-modal="newsletterModal"><i className="material-icons">&#xE0E1;</i></NavLink></li>
                        </ul>
            
            
                        </div>
                        <Search/>
                    </div>
                    <Notification/>
           </header>

        )
    }
}




export default Menu