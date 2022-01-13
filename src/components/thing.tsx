import React from 'react';

// interface Props {
//     name: string,
//     description: string
// }
function Thing({name, description}: {name:string, description:string}) {
    const things = ["raindrops", "wiskers", "kettles", "mittens"];

    return(
        <ul>
            {things.map(thing => <li key={thing}>{thing}</li>)}
        </ul>
    )
}

export default Thing