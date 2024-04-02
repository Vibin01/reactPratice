import { useState } from "react"


export const RegForm =()=>{
   const [user,setUser]=useState({
    name:"vibin",
    age:25,
    gender:"Male",
    isMarried:true,
    country:"India",
    bio:"hellow world"
   });

   function changeHandler(e){
    const name=e.target.name;
    const value=e.target.type==="checkbox" ? e.target.checked : e.target.value;
    setUser({...user,[name]:value});
   }
    return(
        <>
        <table>
            <tbody>
        <tr>
            <td>Name</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Marital Stauts</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>{user.country}</td>
        </tr>
        <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
        </tr>
            </tbody>
        </table>
        <form action="">
            <input type="text" placeholder="Full Name" value={user.name} name="name" onChange={changeHandler}/>
            <input type="nuber" placeholder="Age" value={user.age} name="age" onChange={changeHandler}/>
            <div className="gender">
                <label htmlFor="female"><input type="radio" name="gender" id="male" checked={user.gender==="Male"} value="Male" onChange={changeHandler}/>Male</label>
                <label htmlFor="female"><input type="radio" name="gender" id="female" checked={user.gender==="Female"}  value="Female" onChange={changeHandler}/>Female</label>

            </div>
            <label htmlFor="isMarried">
                <input type="checkbox" id="isMarried" name="isMarried" checked={user.isMarried} onChange={changeHandler}/>Is married
            </label>
            <div>
                <label htmlFor="country">Select Country: </label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <textarea name="bio" id="bio" cols="30" rows="5" placeholder="Write about you" value={user.bio} onChange={changeHandler}></textarea>
        </form>
        </>
    )
}