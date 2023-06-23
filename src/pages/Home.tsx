import PageBox from "../Component/PageBox"
import eshik from '../images/eshik.png'
import fortichka from '../images/fortichka.png'
import deraza from '../images/image.webp'
import '../index.scss'

const Home = () => {
  return (
    <div className="HomeContainer">
        <PageBox  imgSrc={eshik} text="Eshiklar" link="/"/>
        <PageBox  imgSrc={deraza} text="Derazalar" link="/"/>
        <PageBox  imgSrc={fortichka} text="Fortichka" link="/"/>

    </div>
  )
}

export default Home