import React from 'react';

function Person({nam}) {

    return (
        <div>
            <h2>I am {nam.name}, i am {nam.age}</h2>
        </div>
    )
}

export default Person
