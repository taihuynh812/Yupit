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
                    <h1>{name}</h1>
                    <div>{rating}</div>
                    <div>{address} {city}, {state} {zipcode}</div>
                    <div>{phone}</div>
                    <div>{website}</div>
                </div>
            )
        }
    }
}

export default BusinessShow