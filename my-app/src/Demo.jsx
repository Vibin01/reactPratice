import React, { useState } from 'react'
// import Demo1 from './Demo1'

export const Demo = (props) => {
    const [user,setUser]=useState({
      name:'vibin',
      age:25,
      bool: true,
    })
function changeture(){


}

  return (
    <div>
    <p>{user.bool ? console.log(true):console.log(false) }</p>
    <button onClick={changeture}>btn 1</button>
    </div>
  )
}
