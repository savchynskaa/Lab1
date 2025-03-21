import React from 'react';

class Search extends React.Component {

    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter')
            this.props.searchMovies(this.state.search, this.state.type)
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field inline'>
                        <input
                            placeholder='search'
                            type='search'
                            className='validate'
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey}
                        />
                        <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                        <div>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='all'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'all'} />
                                <span>All</span>
                            </label>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='movie'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'} />
                                <span>Movie</span>
                            </label>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='series'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'series'} />
                                <span>Series</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Search;