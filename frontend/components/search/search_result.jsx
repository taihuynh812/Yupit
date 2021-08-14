import React from 'react'
import NavBar from '../nav_bar/nav_bar'
import BusinessMap from '../map/business_map'
import BusinessListItem from '../business/business_list_item'
import AboutMeFooter from '../footer/about_me_footer'

class SearchResult extends React.Component{

    constructor(props){
        super(props)
        this.props.searchBusinesses(this.props.match.params.keyword)
    }

    render(){
        if (this.props.businesses.length < 1){
            return(
                <div>
                    <div className='business-nav-bar-container'><NavBar/></div>
                    <div>
                        No results for "{this.props.match.params.keyword}"
                    </div>      
                </div>
            )
        } else {
            return(
                <div className='search-result-page'>
                    <div className='business-nav-bar-container'><NavBar/></div>

                    <div className='search-results-wrapper'>
                        <div className='search-results-container'>
                            <div className='search-results-list-header'>Best {this.props.match.params.keyword} in New York City, NY</div>
                            {this.props.businesses.map((business, i) => (
                                <div className='search-result-business-item' key={i}>
                                    <BusinessListItem
                                        order={i}
                                        business={business}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='search-results-map-container'>
                            <div id="search-results-map"><BusinessMap businesses={this.props.businesses}/></div>
                        </div>
                    </div>
                    <AboutMeFooter/>
                </div>
            )
        }
    }
}

export default SearchResult