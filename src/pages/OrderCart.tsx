import { useContext } from 'react';
import { Context } from '../utils/Context';
import Button from '../Component/Button';
import './pages.scss'
import Derazastyle1 from '../Component/derazaStyle/Derazastyle1';
import Derazastyle13 from '../Component/derazaStyle/Derazastyle13';
import Derazastyle11 from '../Component/derazaStyle/Derazastyle11';
export const OrderCart = () => {
  const props = useContext(Context)
  return (
    <>
      {
        props?.Zakaz.length != 0 ?
          <div style={{ width: '100%', height: window.innerHeight / 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Savat bo'sh</h1>
          </div> :
          <div className='Zakaz'>
            <div>
              <div>
              <Derazastyle13 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
         

              </div>
              <div>
                <h2>1.320.000 so'm</h2>
                <div>
                  <Button class='BtnErr' text="O'chirish" handelClick={() => { }} />
                <Button class='BtnSucc' text="Tahrirlash" handelClick={() => { }} />
                </div>
                


              </div>
            </div>
            <div>
              <div>
              <Derazastyle1 shishaColor={'rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
         

              </div>
              <div>
                <h2>1.320.000 so'm</h2>
                <div>
                  <Button class='BtnErr' text="O'chirish" handelClick={() => { }} />
                <Button class='BtnSucc' text="Tahrirlash" handelClick={() => { }} />
                </div>
                


              </div>
            </div>
            <div>
              <div>
              <Derazastyle13 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
         

              </div>
              <div>
                <h2>1.320.000 so'm</h2>
                <div>
                  <Button class='BtnErr' text="O'chirish" handelClick={() => { }} />
                <Button class='BtnSucc' text="Tahrirlash" handelClick={() => { }} />
                </div>
                


              </div>
            </div>
            <div>
              <div>
              <Derazastyle11 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} />
         

              </div>
              <div>
                <h2>1.320.000 so'm</h2>
                <div>
                  <Button class='BtnErr' text="O'chirish" handelClick={() => { }} />
                <Button class='BtnSucc' text="Tahrirlash" handelClick={() => { }} />
                </div>
                


              </div>
            </div>
<div>
   <h3>Jami:5.123.000 so'm</h3>
</div>
            <div>
             
           <button style={{width:'100%'}} className='BtnSucc'>Buyurtmani qabul qilish</button>
            </div>
          </div>
      }
    </>
  )
}
