import React from 'react';

function ThingSet () {
    const things = [
        {name: "raindrops", description: "on roses"},
        {name: "wiskers", description: "on kittens"}
    ]

    return(
        <ul>
            {
                things.map(thing => <li key ={thing.name}> {thing.name + "" + thing.description} </li>)
            }
        </ul>
    )
}


export default ThingSet;