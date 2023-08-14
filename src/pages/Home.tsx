import { useContext } from "react"
import Navbar from "../Component/Navbar"
import PageBox from "../Component/PageBox"
import eshik from '../images/eshik.png'
import fortichka from '../images/fortichka.png'
import deraza from '../images/image.webp'
import '../index.scss'
import { Context } from "../utils/Context"
import Login from "./Login"

const Home = () => {
  const props=useContext(Context)
  return (
    <>
    {props?.User.name==''?<Login/>: <div className="HomeContainer">
      <Navbar/>
        <PageBox  imgSrc={eshik} text="Eshik" link="/myeshik"/>
        <PageBox  imgSrc={deraza} text="Deraza" link="/myderaza"/>
        <PageBox  imgSrc={fortichka} text="Fortichka" link="/"/>
        <PageBox  imgSrc={fortichka} text="Maxsus" link="/"/>

        

    </div>}
    </>
   
  )
}

export default Home