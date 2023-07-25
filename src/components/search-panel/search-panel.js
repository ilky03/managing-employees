import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const input = e.target.value;
        const { onUpdateSearch } = this.props;
        this.setState({
            term: input,
        })
        onUpdateSearch(input);
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input" 
                placeholder="Найти працівника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;