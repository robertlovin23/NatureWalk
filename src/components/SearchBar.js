import React from 'react'

class SearchBar extends React.Component {
        state = {
            term: ""
    }
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return(
            <div className = "ui container segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="Search Bar">Search Bar</label>
                        <input type="text" 
                               placeholder="Search..."
                               value={this.state.term}
                               onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;