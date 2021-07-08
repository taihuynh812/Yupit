import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Search extends React.Component{

    render(){
        return(
            <div className='searchbar-container'>
                <form className='searchbar-form'>
                    <input type="text" className='keyword-search' />
                    <input type="text" className='location-search' />
                    <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                
            </div>
        )
    }
}

export default Search