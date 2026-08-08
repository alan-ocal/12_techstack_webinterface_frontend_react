
import React from "react";

//the parent component.
function RatingWithGlyphicon(props) {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div>
            <h1>Rating: {props.rating}</h1>
            {ratings.map((rate) => (
                // RatingWithGlyphicon renders (uses) the Glyphicon component.
                <Glyphicon key={rate} glyph={props.rating >= rate ? 'star' : 'star-empty'} />
            ))}
        </div>
    )
}
//Glyphicon child component.
function Glyphicon(props) {
    return (
        <span style={{
            fontSize: '32px',
            color: props.glyph === 'star' ? 'orange' : 'lightgrey'
        }}>
            {props.glyph === 'star' ? '★' : '☆'}
        </span>
    );
}

export default RatingWithGlyphicon
