import { useContext } from "react"
import Navbar from "../Component/Navbar"
import { Context } from "../utils/Context"
import Login from "./Login"


export const MyEshikStyles = () => {
  const props=useContext(Context)
  return (
    <>
     {props?.User.name==''?<Login/>: <div>
      <Navbar/>
      MyEshikStyles</div>}</>
   
  )
}
