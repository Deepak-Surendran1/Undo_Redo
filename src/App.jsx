import './App.css'
import { useState } from 'react'
export default function App() {
  const [points, setPoints] = useState([]);
  const [poparray, setPopArray] = useState([]);

  const handleClick = (e) => {
    let { clientX, clientY } = e
    setPoints([...points, { x: clientX, y: clientY }])
    // console.log(points)
  }


  const handleUndo = () => {
    let newPoints = [...points]
    let pp = newPoints.pop()
    setPoints(newPoints)
    setPopArray([...poparray, pp])
    // console.log('hi' + pp.x + pp.y)
    // console.log(poparray)

  }
  const handleRedo = () => {
    let newPoints = [...points]
    let newpop = [...poparray]
    newPoints.push(newpop.pop())
    setPoints(newPoints)
    setPopArray(newpop)



  }

  return (
    <>

      <div className='button-div'>
        <button disabled={!points.length} onClick={handleUndo} className='first-button'>Undo</button>
        <button disabled={!poparray.length} onClick={handleRedo}>Redo</button>
      </div>



      <div className='container' onClick={(e) => handleClick(e)}>


        {points.map((point) =>
          <div className='userclick' style={{
            left: point.x + "px",
            top: point.y + "px",
          }}></div>
        )}


      </div>


    </>
  )
}
