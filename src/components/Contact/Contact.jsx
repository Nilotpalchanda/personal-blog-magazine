import React, { Component } from 'react'
import App from '../App'
import Sidebar from '../Sidebar/Sidebar'
class Contact extends Component{
    render(){
        return(
            <App>
               	<main className="main-container">
                 <section className="main-content extra-pages">
                    <div className="main-content-wrapper add-to-margin">
                        <div className="content-body">
                            <article className="article-wrapper">
                                <div className="article-content">
                                    <h1 className="extra-title">Contact</h1>
                                    <div className="article-inner">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                        <div className="contact-form">
                                            <form id="contactFrom">
                                                <div className="frm-row">
                                                    <div className="columns column-2">
                                                        <input type="text" name="nname" placeholder="Name" className="frm-input"/>
                                                    </div>
                                                    <div className="columns column-2">
                                                        <input type="text" name="eemail" placeholder="Email" className="frm-input"/>
                                                    </div>
                                                    <div className="columns column-2">
                                                        <input type="text" name="wwebsite" placeholder="Website" className="frm-input"/>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="frm-row">
                                                    <input type="text" name="ssubject" placeholder="Subject" className="frm-input"/>
                                                </div>
                                                <div className="frm-row">
                                                    <textarea className="frm-input" rows="8" name="mmessage" placeholder="Enter your message"></textarea>
                                                </div>
                                                <div className="frm-row send-button">
                                                    <button type="button" className="frm-button material-button">Send message</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div id="endOfTheArticle"></div>

                                </div>
                            </article>
                        </div>
                        <Sidebar/>
                    </div>
                </section>

                </main>
            </App>
        )
    }
}

export default Contact