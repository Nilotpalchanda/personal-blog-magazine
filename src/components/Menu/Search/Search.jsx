import React, {Component}  from 'react'

class Search extends Component {
    render(){
        return(
            <div className="search-bar">
            <form className="search-form">
                <div className="search-input-wrapper">
                    <input type="text" name="qq" placeholder="search something..." className="search-input"/>
                    <button type="submit" name="search" className="search-submit"><i className="material-icons">&#xE5C8;</i></button>
                </div>
                <span className="search-close search-toggle">
                    <i className="material-icons">&#xE5CD;</i>
                </span>
            </form>
        </div>
        )
    }
}
export default Search