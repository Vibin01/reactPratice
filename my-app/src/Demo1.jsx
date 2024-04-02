
import React, { useState } from 'react'
const Demo1 = () => {
    const [name,setName]=useState("vibin")
function demo(){
    
setName("mIVJHVHGF")
}
  return (
    <>
    <p>{name}</p>
    <p></p>
    <button onClick={demo}>button 2</button>
    </>
  )
}

export default Demo1
