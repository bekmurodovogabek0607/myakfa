import { useContext } from "react"
import Navbar from "../Component/Navbar"
import Login from "./Login"
import { Context } from "../utils/Context"


export const AllEshikStyles = () => {
  const props=useContext(Context)
  return (
    <>
     {props?.User.name==''?<Login/>:  <div>
      <Navbar/>
      AllEshikStyles</div>}
    </>
  
  )
}
