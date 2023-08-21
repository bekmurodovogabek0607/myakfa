import { useContext, useState } from 'react';
import { Context, IZakaz } from '../utils/Context';
import Button from '../Component/Button';
import './pages.scss'
import StylesChanger from '../utils/StylesChanger';
import { useHistory } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Login from './Login';

// import MahsulotSoniQosh from '../utils/MahsulotSoniQoshish';


export const OrderCart = () => {
  const router = useHistory()
  const props = useContext(Context)
  const [nimadir,setnimadir]=useState<number>(0)
  const showModal = () => {
    props?.setIsModalOpen(true)
  };
  // function newCart(item:IZakaz){
  //   const qolgani:IZakaz[]|undefined=props?.Zakaz.filter((itt:IZakaz)=>{itt.ZakazStyles!=item.ZakazStyles})
  //   if(qolgani!=undefined)
  //   props?.setZakaz([...qolgani,item])

  // }
  const sum = props?.Zakaz.reduce((a, b) => {
    if (b.narxi != undefined) return a + (b.narxi * b.soni)
    else return a

  }, 0);
  function currencyFormat(num:number) {
    return  num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
console.log(currencyFormat(344566672));

  return (
  <>
   {props?.User.name==''?<Login/>: <>
    <Navbar/>
      {
        props?.Zakaz.length == nimadir ?
          <div style={{ width: '100%', height: window.innerHeight / 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Savat bo'sh</h1>
            <Button handelClick={()=>{router.push('/')}} text="Buyurtma olish" class='BtnSucc'/>
          </div> :
          <div className='Zakaz'>

            {props?.Zakaz.map((item: IZakaz, number: number) => {


              return (
                <div key={number}>
                  <div>
                    {StylesChanger(item.ZakazStyles, item.ProfilColor, setnimadir, setnimadir)}
                  </div>
                  <div>
                    <h2>{currencyFormat(item.narxi != undefined ? item.narxi * item.soni : 0)} so'm</h2>
                    <h2>X {item.soni} ta</h2>


                    <div>
                      <Button class='BtnErr' text="O'chirish" handelClick={() => {props.setZakaz(props?.Zakaz.filter((tem: IZakaz) => tem.id != item.id))  }} />
                      
                    </div>



                  </div>
                </div>
              )
            })}


            <div>
              <h3>
                {currencyFormat(sum==undefined?0:sum)} so'm
              </h3>
            </div>
            <div>
              <Button handelClick={()=>{router.push('/')}} text="Yana Qo'shish" class='BtnSucc'/>
              <h4 style={{padding:'20px'}}></h4>
              <button onClick={showModal} style={{ width: '100%' }} className='BtnSucc'>Buyurtmani qabul qilish</button>
            </div>
          </div>
      }
    </>}</>
   
  )
}
