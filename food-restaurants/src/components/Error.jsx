import { useRouteError } from "react-router-dom"
export const Error =()=>{
    const err=useRouteError()
    console.log(err)
    return (
        <>
        <h1>Oops!!</h1>
        <h3>SomeThing went wrong!!</h3>
        <h4>{err.status}:{err.statusText}</h4>
        </>
    )
}