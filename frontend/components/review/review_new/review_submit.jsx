import React from 'react'

class ReviewSubmit extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <h1>Write your review for {this.props.business.name}</h1>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
            
        )
    }
}

export default ReviewSubmit