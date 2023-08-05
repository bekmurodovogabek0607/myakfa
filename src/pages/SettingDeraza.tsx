import { useContext, useState } from "react"
import { Context } from "../utils/Context"
  

import './pages.scss'

import Navbar from "../Component/Navbar"
import { Setting } from "../Component/SettingStyle.tsx/Setting"
import StylesChanger from "../utils/StylesChanger"


const SettingDeraza = () => {
  const props = useContext(Context)
  const [nimadir,setnimadir]=useState<number>(0)
  

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
      <Navbar />
      <div>
        <h3 style={{marginLeft:"10px"}}>Mehnat haqqini qo'shish</h3>
        {
          StyleCreator(14).map((item:string)=>{
            return(

              <Setting styles={StylesChanger(item,'rgb(160, 64, 0)',setnimadir,setnimadir)} foiz={nimadir+26} qoshimcha={50000}/>
            )
          })
        }

      </div>


    </>
  )
}



export default SettingDeraza