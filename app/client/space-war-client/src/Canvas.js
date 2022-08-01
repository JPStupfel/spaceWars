import React, { useRef, useEffect, useState } from 'react'


//fetch armies array, separate circle arc into own logic?

 export default function Canvas({props}) {

    const [coords, setCoords] = useState([200, 50])
    const [armies, setArmies] = useState([])

    const canvasRef = useRef(null)

    useEffect(
    
      ()=>{
      fetch('http://localhost:3000/armies')
  .then((response) => response.json())
  .then((data) => console.log(data))},
      []
    )
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.beginPath();
    context.arc(coords[0], coords[1], 10, 0, 2 * Math.PI);
    context.stroke();
        
        
  }, [])
  
  return <canvas id='my_canvas' ref={canvasRef} {...props}/>
}

