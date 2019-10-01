import React from 'react'

class SearchBar extends React.Component {
        state = {
            term: "",
            minLength: 0,
            minStars: 0,
            filter: "distance",
            maxDistance: 50
    }
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onDistanceChange = (event) => {
        this.setState({
            maxDistance: event.target.value
        })
    }
    onLengthChange = (event) => {
        this.setState({
            minLength: event.target.value
        })
    }
    onStarsChange = (event) => {
        this.setState({
            minStars: event.target.value
        })
    }
    onFilterChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(
            this.state.term,
            this.state.minLength,
            this.state.minStars,
            this.state.filter,
            this.state.maxDistance
        )
    }
    render() {
        return(
            <div className = "ui container segment" style={{marginTop: '10px'}}>
                <form className="ui form">
                    {/* <div className="two fields">
                        <div className="field">
                            <label>Minimum Trail Length (In Miles)</label>
                            <select className="fluid dropdown" value={this.state.minLength} onChange={this.onLengthChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Minimum Stars</label>
                            <select className="fluid dropdown" value={this.state.minStars} onChange={this.onStarsChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Filter By</label>
                            <select className="fluid dropdown" value={this.state.filter} onChange={this.onFilterChange}>
                                <option value="distance">Distance From Location</option>
                                <option value="quality">Quality of Trail</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Distance From Location (In Miles)</label>
                            <select className="fluid dropdown" value={this.state.maxDistance} onChange={this.onDistanceChange}>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="150">150</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="field">
                        <label htmlFor="Search Bar">Search A Location</label>
                        <input type="text" 
                               placeholder="Search..."
                               value={this.state.term}
                               onChange={this.onInputChange}>
                        </input> 
                    </div>
                    <div>
                        <button className="ui primary button" onClick={this.onFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;