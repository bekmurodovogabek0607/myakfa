import { useContext } from "react"
import Navbar from "../Component/Navbar"
import { Context } from "../utils/Context"
import Login from "./Login"


export const Report = () => {
  const props=useContext(Context)
  return (
    <>
    {props?.User.name==''?<Login/>: <>
    <Navbar/>
     <div>Report</div>
    </>}
    </>
   
   
  )
}
