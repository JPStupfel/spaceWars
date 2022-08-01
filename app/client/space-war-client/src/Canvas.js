import React, { useRef, useEffect, useState } from 'react'


//fetch armies array, separate circle arc into own logic?

 export default function Canvas({armies}) {

    const [coords, setCoords] = useState([200, 50])

    const canvasRef = useRef(null)

    
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.beginPath();
    console.log(armies[0])
    if (armies[0]) {
    context.arc(armies[0].northing, armies[0].easting, 10, 0, 2 * Math.PI);
    context.stroke();
        }
  }, [armies])
  
  return <canvas id='my_canvas' ref={canvasRef} />
}

