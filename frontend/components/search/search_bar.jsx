import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends React.Component{

    render(){
        return(
            <div className='searchbar-container'>
                <form className='searchbar-form'>
                    <div className='search-inputs'> 
                        <input type="text" id='keyword-search' placeholder="Search food"/>
                        <input type="text" id='location-search' placeholder='Location'/>
                    </div>
                    <div className='search-submit'>
                        <button type='search-submit-button'><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar