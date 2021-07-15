import React from 'react'
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusinesses()
    }


    render(){
        if (this.props.businesses.length < 1){
            return(
                <div>Loading...</div>
            )
        } else {
            return(
                <div className='business-index-list-wrapper'>
                    <div className='hot-new-businesses'>Hot & New Businesses</div>
                    <div className='business-index-list-container'>
                        {Object.values(this.props.businesses).slice(0,3).map((business, i) => (
                            <div className='business-index-item' key={i}>
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

export default BusinessIndex