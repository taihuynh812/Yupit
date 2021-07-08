import React from 'react'
import BusinessIndexItem from './business_index_item'


class BusinessIndex extends React.Component{
    
    componentDidMount(){
        this.props.fetchBusinesses()
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.businesses.map((business, i) => (
                        <BusinessIndexItem
                            key={i}
                            business={business}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default BusinessIndex