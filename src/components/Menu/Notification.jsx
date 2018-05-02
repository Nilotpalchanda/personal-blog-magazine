import React, {Component} from 'react'

class Notification extends Component {
    render(){
        return(
            <div className="m-modal-box" id="newsletterModal">
            <div className="m-modal-overlay"></div>
            <div className="m-modal-content small">
                <div className="m-modal-header">
                    <h3 className="m-modal-title">Newsletter</h3>
                    <span className="m-modal-close"><i className="material-icons">&#xE5CD;</i></span>
                </div>
                <div className="m-modal-body">
                    <p>Submit to our newsletter to receive exclusive stories delivered to you inbox!</p>
                    <form>
                        <div className="frm-row">
                            <input className="frm-input" type="text" name="email" placeholder="Email address"/>
                        </div>
                        <div className="frm-row">
                            <button className="frm-button material-button full" type="button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Notification