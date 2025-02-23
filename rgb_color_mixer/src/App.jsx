import React, { useState } from 'react'

const App = () => {
  const colors=JSON.parse(localStorage.getItem("color"))
  const [r,setR]=useState(colors && colors.r?colors.r:0)
  const[g,setG]=useState(colors && colors.g?colors.g:0)
  const[b,setB]=useState(colors && colors.b?colors.b:0)

  const save=()=>{
    localStorage.setItem("color", JSON.stringify({r,g,b}))
  }
  return (
    <div>
      <h1>Color-Mixer</h1>
       <div style={{backgroundColor:'rgb('+r+','+g+','+b+')' ,height:200, width:300}}>
       </div>

      <label>Red : </label>
      <input type="range" value={r} onChange={(e)=>setR(e.target.value)} min={0} max={255} />
      <br />
      <label >Green : </label>
      <input type="range" value={g} onChange={(e)=>setG(e.target.value)} min={0} max={255} />
      <br />
      <label>Blue : </label>
      <input type="range" value={b} onChange={(e)=>setB(e.target.value)}  min={0} max={255} />
      <br />
      <button onClick={save}>Save Color Combination</button>

    </div>
  )
}

export default App