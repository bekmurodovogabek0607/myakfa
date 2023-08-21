import { useContext, useState } from "react"
import { Context } from "../utils/Context"
import { Link, useHistory } from "react-router-dom"

import './pages.scss'
import img from '../images/derazastyles1.jpg'
import Navbar from "../Component/Navbar"
import StylesChanger from "../utils/StylesChanger"
import Login from "./Login"
import { useGet } from "../utils/ApiQuery"
import { Button ,Typography} from "antd"

const { Text } = Typography;
const MyDerazaStyles = () => {
  const props = useContext(Context)
  const GetMystyles = useGet(['mystyles'], `/mystyles/${localStorage.getItem('my-akfa-id')}`)
  const router = useHistory()
  const [nimadir, setnimadir] = useState<number>(0)

console.log(GetMystyles.data);

  console.log(props?.OneZakaz);
  function ChangeArka(style: string): boolean {
    switch (style) {
      case 'Derazastyle1':
        return false
      case 'Derazastyle2':
        return false
      case 'Derazastyle3':
        return false
      case 'Derazastyle4':
        return false
      case 'Derazastyle5':
        return false
      case 'Derazastyle6':
        return false
      case 'Derazastyle7':
        return false
      case 'Derazastyle8':
        return false
      case 'Derazastyle9':
        return true
      case 'Derazastyle10':
        return false
      case 'Derazastyle11':
        return true
      case 'Derazastyle12':
        return true
      case 'Derazastyle13':
        return true
      case 'Derazastyle14':
        return false


      default:
        return false

    }
  }

  return (
    <>
      {props?.User.name == ''? <Login /> : <>
        <Navbar />
        {

          <div className='PersonStyles'>
            {
              GetMystyles.isSuccess && GetMystyles.data?.total.length == nimadir ?
                <div className={'AddStyles'}>
                  <img src={img} width={200} height={200} />
                  <Link to={'/setting/deraza'}><Button type="primary" >+ Qo'shish</Button> </Link>
                </div>
                :
                <div className='AllDeraza'>
                  <div>
                    <h2>Sizda mavjud Dizaylar</h2>
                  </div>
                  <div>
                    {GetMystyles.data == undefined ?
                      <div style={{width:'80%',height:"300px",display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>  
                       <Text type="danger">Avtorizatsiyadan o'tmadi Iltimos Sahifani yangilang</Text>  
                    </div> :
                      GetMystyles.data?.total.map((item: { style: string }) => {
                        return (


                          <div
                            onClick={() => {
                              router.push('/zakaz');
                              props?.setSelectDesing({ styles: item.style, arka: ChangeArka(item.style) })
                              props?.setONeZakaz({ ...props.OneZakaz, ZakazStyles: item.style, id: `${Math.floor(Math.random() * 100000000)}`, soni: 1 })
                            }} style={{ cursor: "pointer" }}>
                            <div >
                              {/* Yangi mahsulot bo'sa new style yozib qo'yiladi */}

                            </div>

                            {StylesChanger(item.style, 'rgb(160, 64, 0)', setnimadir, setnimadir)}

                          </div>


                        )
                      })
                    }




                  </div>

                </div>
            }

          </div>
        }
      </>}
    </>

  )
}

export default MyDerazaStyles