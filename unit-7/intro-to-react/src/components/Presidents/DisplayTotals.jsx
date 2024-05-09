import React from 'react';

function DisplayTotals (props) {

    return(
        <>
            <p>{props.name} had a total vote count of {props.total}</p>
        </>
    )
}

export default DisplayTotals;