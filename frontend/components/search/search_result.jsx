import React from 'react'
import BusinessIndexItem from '../business/business_index_item'
import NavBar from '../nav_bar/nav_bar'

class SearchResult extends React.Component{

    constructor(props){
        super(props)
        this.props.searchBusinesses(this.props.match.params.keyword)
    }

    render(){
        if (this.props.businesses.length < 1){
            return(
                <div>Loading...</div>
            )
        } else {
            return(
                <div>
                    <div className='business-nav-bar-container'><NavBar/></div>
                    <div className='search-results-list'>
                        {this.props.businesses.map((business, i) => (
                            <div className='search-result-business-item' key={i}>
                                <BusinessIndexItem
                                    business={business}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default SearchResult