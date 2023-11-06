import React, { Component } from 'react';

class BotSearch extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
        };
    }

    handleChange = (event) => {
        // Update the query state with the input value
        this.setState({
            [event.target.name]: event.target.value,
        });

        // Pass the updated query value to the parent component
        this.props.handleChange(event.target.value);
    }

    handleSearch = (event) => {
        event.preventDefault();

        // Call the handleClear function in the parent component
        this.props.handleClear(this.state.query);

        // Clear the query input field
        this.setState({
            query: '',
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="query"
                        placeholder="Search"
                        value={this.state.query}
                        type="text"
                        onChange={(event) => this.handleChange(event)}
                    ></input>
                    <button
                        onClick={(event) => this.handleSearch(event)}
                        type="button"
                    >
                        Clear
                    </button>
                </form>
            </div>
        );
    }
}

export default BotSearch;
