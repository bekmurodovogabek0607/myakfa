import { useContext } from "react"
import Navbar from "../Component/Navbar"
import Login from "./Login"
import { Context } from "../utils/Context"


export const MyOrder = () => {
  const props=useContext(Context)
  return (
    <>
     {props?.User.name==''?<Login/>: <>
    <Navbar/>
    <div>MyOrder</div></>}
    </>
   
    
  )
}
