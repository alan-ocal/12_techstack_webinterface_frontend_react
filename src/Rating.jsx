import React from 'react';


// This component receives data from App (props.rating)
function Rating(props) {
    //This array is used to draw five stars.
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div>
            <h1>Rating: {props.rating}</h1>
            <div>
                {ratings.map((rate) => (
                    <span key={rate}
                          //if (rate <= props.rating) orange else lightgrey
                        //props.rating = 5
                          style={{ color: rate <= props.rating ? 'orange' : 'lightgrey' }}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    )
}
export default Rating;