import {useState} from 'react'

export const UserDetails = () => {
    const [user,setUser]=useState(
        {fname:"vibin",lname:"akash", age:21},
    )

    // function changeName(e){
    //    const newStateObject={...user};
    //    newStateObject.name=e.target.value;
    //    setUser(newStateObject)
    // setUser((oldState)=>{
    //     return {...oldState,name:e.target.value}
    // })
    // }
    // function changeAge(e){
    //     setUser((oldState)=>{
    //         return {...oldState,age:e.target.value}
    //     })
    // }

    function changeHandler(e){
        setUser({...user,[e.target.name] : e.target.value})
    }
    
  
  return (
    <>
  <form action="">
    {user.fname},{user.lname},{user.age}
   
    <input type="text" value={user.fname} placeholder='Enter User Name' name="fname" onChange={changeHandler} />
    <input type="text"value={user.lname} placeholder='Enter User Age' name='lname' onChange={changeHandler} />
    <input type="text"value={user.age} placeholder='Enter User Age' name='age' onChange={changeHandler} />
  </form>
    </>
  )
}

