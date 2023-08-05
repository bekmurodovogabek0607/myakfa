import { useContext, useState } from "react"
import { Context } from "../utils/Context"
import { Link, useHistory } from "react-router-dom"

import './pages.scss'
import img from '../images/derazastyles1.jpg'
import Navbar from "../Component/Navbar"
import StylesChanger from "../utils/StylesChanger"

const MyDerazaStyles = () => {
  const props = useContext(Context)
  const router = useHistory()
  const [nimadir,setnimadir]=useState<number>(0)


console.log(props?.OneZakaz);

  return (
    <>
    <Navbar/>
      {

        <div className='PersonStyles'>
          {
            props?.MyDerazaStyles.length == nimadir ?
              <div className={'AddStyles'}>
                <img src={img} width={200} height={200} />
                <Link to={'/allderaza'}>Deraza styleslarini qo'shish</Link>
              </div>
              :
              <div className='AllDeraza'>
                <div>
                  <h2>Sizda mavjud Dizaylar</h2>
                </div>
                <div>
                  {
                    props?.MyDerazaStyles.map((item: { styles: string, arka: boolean }) => {
                      return (


                        <div
                          onClick={() => {
                            router.push('/zakaz');
                            props.setSelectDesing({ styles: item.styles, arka: item.arka })
                            props?.setONeZakaz({ ...props.OneZakaz, ZakazStyles: item.styles ,id:`${Math.floor(Math.random()*100000000)}`,soni:1})
                          }} style={{ cursor: "pointer" }}>
                          <div >
                            {/* Yangi mahsulot bo'sa new style yozib qo'yiladi */}

                          </div>
                          
                          {StylesChanger(item.styles, 'rgb(160, 64, 0)',setnimadir,setnimadir)}

                        </div>


                      )
                    })
                  }




                </div>

              </div>
          }

        </div>
      }
    </>
  )
}

export default MyDerazaStyles