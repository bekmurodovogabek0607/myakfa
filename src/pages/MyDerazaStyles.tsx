import { useContext } from "react"
import { Context } from "../utils/Context"
import { Link, useHistory } from "react-router-dom"
import Derazastyle1 from "../Component/derazaStyle/Derazastyle1"
import Derazastyle2 from "../Component/derazaStyle/Derazastyle2"
import Derazastyle3 from "../Component/derazaStyle/Derazastyle3"
import Derazastyle4 from "../Component/derazaStyle/Derazastyle4"
import Derazastyle5 from "../Component/derazaStyle/Derazastyle5"
import Derazastyle6 from "../Component/derazaStyle/Derazastyle6"
import Derazastyle7 from "../Component/derazaStyle/Derazastyle7"
import Derazastyle8 from "../Component/derazaStyle/Derazastyle8"
import Derazastyle9 from "../Component/derazaStyle/Derazastyle10"
import Derazastyle10 from "../Component/derazaStyle/Derazastyle9"
import Derazastyle11 from "../Component/derazaStyle/Derazastyle11"
import Derazastyle12 from "../Component/derazaStyle/Derazastyle12"
import Derazastyle13 from "../Component/derazaStyle/Derazastyle13"
import Derazastyle14 from "../Component/derazaStyle/Derazastyle14"
import './pages.scss'
import img from '../images/derazastyles1.jpg'

const MyDerazaStyles = () => {
  const props = useContext(Context)
  const router = useHistory()
  function DerazaStyles(params: string): React.JSX.Element {
    switch (params) {
      case "Derazastyle1":
        return <Derazastyle1 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle2":
        return <Derazastyle2 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle3":
        return <Derazastyle3 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle4":
        return <Derazastyle4 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle5":
        return <Derazastyle5 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle6":
        return <Derazastyle6 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle7":
        return <Derazastyle7 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle8":
        return <Derazastyle8 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle9":
        return <Derazastyle9 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle10":
        return <Derazastyle10 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle11":
        return <Derazastyle11 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle12":
        return <Derazastyle12 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      case "Derazastyle13":
        return <Derazastyle13 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />


      case "Derazastyle14":
        return <Derazastyle14 shishaColor={'rgb(141, 69, 2)'} derazaColor={"rgb(219, 219, 219)"} seerazmer={'block'} />

      default:
        return <div></div>



    }
  }

console.log(props?.OneZakaz);

  return (
    <>
      {

        <div className='PersonStyles'>
          {
            props?.MyDerazaStyles.length == 0 ?
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
                          {DerazaStyles(item.styles)}

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