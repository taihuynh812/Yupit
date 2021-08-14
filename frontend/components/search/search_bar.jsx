import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';


class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
        this.submit = this.submit.bind(this)
    }

    update(type){
        return e => this.setState({[type]: e.currentTarget.value})
    }

    submit(e){
        // debugger
        e.preventDefault()
        this.props.searchBusinesses(this.state.query)
            .then((results) => this.props.history.push({
                pathname: `/search/${this.state.query}`,
                state: {results: results}
            }))
    }

    render(){
        return(
            <div className='searchbar-container'>
                <form className='searchbar-form' onSubmit={this.submit}>
                    <div className='search-inputs'> 
                        <input 
                            type="text" 
                            id='keyword-search' 
                            placeholder="Try 'korean', 'lunch', or 'takeout' "
                            value={this.state.query}
                            onChange={this.update('query')}
                        />
                        <input 
                            type="text" 
                            id='location-search' 
                            placeholder='CURRENTLY ONLY NYC'
                        />
                    </div>
                    <div className='search-submit'>
                        <button type='submit' className='search-submit-button'><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default withRouter(SearchBar)