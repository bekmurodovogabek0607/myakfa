import { useContext, useState } from 'react';
import { Context, IZakaz } from '../utils/Context';
import Button from '../Component/Button';
import './pages.scss'
import StylesChanger from '../utils/StylesChanger';
import { useHistory } from 'react-router-dom';
import Navbar from '../Component/Navbar';

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


  return (
    <>
    <Navbar/>
      {
        props?.Zakaz.length == nimadir ?
          <div style={{ width: '100%', height: window.innerHeight / 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Savat bo'sh</h1>
          </div> :
          <div className='Zakaz'>

            {props?.Zakaz.map((item: IZakaz, number: number) => {


              return (
                <div key={number}>
                  <div>
                    {StylesChanger(item.ZakazStyles, item.ProfilColor, setnimadir, setnimadir)}
                  </div>
                  <div>
                    <h2>{item.narxi != undefined ? item.narxi * item.soni : null} so'm</h2>
                    <h2>X {item.soni} ta</h2>


                    <div>
                      <Button class='BtnErr' text="O'chirish" handelClick={() => {props.setZakaz(props?.Zakaz.filter((tem: IZakaz) => tem.id != item.id))  }} />
                      <Button class='BtnSucc' text="Tahrirlash" handelClick={() => {
                        props.setONeZakaz(item)
                        router.push('/zakaz')
                      }} />
                    </div>



                  </div>
                </div>
              )
            })}


            <div>
              <h3>
                {sum} so'm
              </h3>
            </div>
            <div>

              <button onClick={showModal} style={{ width: '100%' }} className='BtnSucc'>Buyurtmani qabul qilish</button>
            </div>
          </div>
      }
    </>
  )
}
