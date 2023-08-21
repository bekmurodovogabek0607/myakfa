import { useContext, useState } from "react"
import { Context } from "../utils/Context"
  

import './pages.scss'

import Navbar from "../Component/Navbar"
import { Setting } from "../Component/SettingStyle.tsx/Setting"
import StylesChanger from "../utils/StylesChanger"
import Login from "./Login"
import { useGet } from "../utils/ApiQuery"


const SettingDeraza = () => {
  const props = useContext(Context)
  const GetMystyles=useGet(['mystyles'],`/mystyles/${localStorage.getItem('my-akfa-id')}`)
  const [nimadir,setnimadir]=useState<number>(0)
  console.log(GetMystyles.data);
  

  console.log(props?.OneZakaz);
  function StyleCreator(nums: number): string[] {
    const mass: string[] = []
    for (let i = 1; i <= nums; i++) {
      mass.push(`Derazastyle${i}`)

    }
    return mass
  }
 
  return (
    <>
     {props?.User.name==''?<Login/>:  <>
      <Navbar />
      <div>
        <h3 style={{marginLeft:"10px"}}>Mehnat haqqini qo'shish</h3>
        {
          StyleCreator(14+nimadir).map((item:string)=>{
            return(

              <Setting styleName={item} styles={StylesChanger(item,'rgb(160, 64, 0)',setnimadir,setnimadir)} foiz={0} qoshimcha={0}/>
            )
          })
        }

      </div>


    </>}</>
  
  )
}



export default SettingDeraza