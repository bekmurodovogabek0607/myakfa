import Navbar from "../Component/Navbar"
import PageBox from "../Component/PageBox"
import eshik from '../images/eshik.png'
import fortichka from '../images/fortichka.png'
import deraza from '../images/image.webp'
import '../index.scss'

const Home = () => {
  return (
    <div className="HomeContainer">
      <Navbar/>
        <PageBox  imgSrc={eshik} text="Eshik" link="/myeshik"/>
        <PageBox  imgSrc={deraza} text="Deraza" link="/myderaza"/>
        <PageBox  imgSrc={fortichka} text="Fortichka" link="/"/>
        <PageBox  imgSrc={fortichka} text="Maxsus" link="/"/>

        

    </div>
  )
}

export default Home