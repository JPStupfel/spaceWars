import React, { useRef, useEffect, useState } from 'react'


//draw circle, make state for coordinates, set default...go make server, fetch coordinates


 export default function Canvas({props}) {

    const [coords, setCoords] = useState([200, 50])
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.beginPath();
    context.arc(coords[0], coords[1], 40, 0, 2 * Math.PI);
    context.stroke();
        
        
  }, [])
  
  return <canvas id='my_canvas' ref={canvasRef} {...props}/>
}

