import React, {useState} from 'react'
import Shape from '../models/Shape'


const ShapeList = () => {
    const [shapes, setShapes] = useState<Shape[]> ([
        { color: "steelblue", size: 100, isCircle: true},
        { color: "black", size: 200, isCircle: false},
        { color: "red", size: 150, isCircle: true}
    ])

    const firstShape: Shape = shapes[0]

    
    return (
        <div>
            
        </div>
    )
}

export default ShapeList
