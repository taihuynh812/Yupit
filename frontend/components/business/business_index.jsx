import React from 'react'
import BusinessIndexItem from './business_index_item'


class BusinessIndex extends React.Component{
    
    componentDidMount(){
        this.props.fetchBusinesses()
    }

    render(){
        return(
            <div>
                <div className='business-index-list-container'>
                    {this.props.businesses.map((business, i) => (
                        <div className='business-index-item'>
                            <BusinessIndexItem
                                key={i}
                                business={business}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default BusinessIndex