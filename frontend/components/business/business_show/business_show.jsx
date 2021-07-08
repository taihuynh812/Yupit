import React from 'react';


class BusinessShow extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        if (!this.props.business){
            return (
                <div></div>
            )
        } else {
            console.log(this.props.business)
            const {name, rating, address, city, state, zipcode, phone, website} = this.props.business
            return(
                <div>
                    <div className='business-show-header-container'>
                        <div className="business-images-container">
                            {this.props.business.photoUrls.map((photoUrl, i) => (
                                <img key={i} className="business-images" src={photoUrl} />
                            ))}
                            <div className='business-info-container'>
                                <h1 className='business-name'>{name}</h1>
                                <div>{rating}</div>
                                <div>{address} {city}, {state} {zipcode}</div>
                                <div>{phone}</div>
                                <div>{website}</div>
                                {this.props.business.categories.map((category, i) => (
                                    <div className='business-categories'>{category.category}</div>
                                ))}
                            </div>
                        </div>  
                    </div>
                    
                    
                </div>
            )
        }
    }
}

export default BusinessShow