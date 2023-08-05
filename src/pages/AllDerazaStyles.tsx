import '../Component/allderaza/allderaza.scss'

import { useContext, useState } from 'react'
import { Context } from '../utils/Context'
import Navbar from '../Component/Navbar'
import StylesChanger from '../utils/StylesChanger'




const AllDerazaStyles = () => {
  const props = useContext(Context)
  const [nimadir,setnimadir]=useState<number>(0)
  function AddMystyles(check: boolean, style: string,arka:boolean) {

    if (check) props?.setMyDerazaStyles([...props.MyDerazaStyles, {styles:style,arka:arka}])


    else {
      props?.setMyDerazaStyles(props.MyDerazaStyles.filter(item => item.styles != style))
    }
  }
  function CheckMyStyles(style: string): boolean {
    if (props?.MyDerazaStyles.filter(item => item.styles == style).length == nimadir) return false
    return true

  }
  function AddAllMystyles(check: boolean) {

    if (check) props?.setMyDerazaStyles([
       {styles:'Derazastyle1',arka:false},
       {styles:'Derazastyle2',arka:false},
       {styles:'Derazastyle3',arka:false},
       {styles:'Derazastyle4',arka:false},
       {styles:'Derazastyle5',arka:false},
       {styles:'Derazastyle6',arka:false},
       {styles:'Derazastyle7',arka:false},
       {styles:'Derazastyle8',arka:false},
       {styles:'Derazastyle9',arka:true},
       {styles:'Derazastyle10',arka:false},
       {styles:'Derazastyle11',arka:true},
       {styles:'Derazastyle12',arka:true},
       {styles:'Derazastyle13',arka:true},
       {styles:'Derazastyle14',arka:false},

      
      ])


    else {
      props?.setMyDerazaStyles([])
    }
  }



  return (
    <> 
    <Navbar/>
    <div className={'AllDeraza'}>
      <div>
        <h2>Dizaylarni qoshing</h2>
        <div>
          <label htmlFor="hammasi">Barchasi</label>
          <input type='checkbox' id='hammasi' 
           onChange={(e)=>{
            AddAllMystyles(e.target.checked)
           

           }}
          />
        </div>
      </div>
      <div>
        <div>
          <div >
            {/* Yangi mahsulot bo'sa new style yozib qo'yiladi */}

          </div>
          {StylesChanger('Derazastyle1', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle1 shishaColor={'rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}

          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle1')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle1',false) }} type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle2', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle2 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle2')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle2',false) }} type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle3', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle3 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle3')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle3',false) }} type="checkbox" id="checkbox3" />
              <label htmlFor="checkbox3"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle4', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle4 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle4')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle4',false) }} type="checkbox" id="checkbox4" />
              <label htmlFor="checkbox4"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle5', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle5 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle5')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle5',false) }} type="checkbox" id="checkbox5" />
              <label htmlFor="checkbox5"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle6', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle6 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle6')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle6',false) }} type="checkbox" id="checkbox6" />
              <label htmlFor="checkbox6"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle7', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle7 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle7')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle7',false) }} type="checkbox" id="checkbox7" />
              <label htmlFor="checkbox7"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle8', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle8 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle8')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle8',false) }} type="checkbox" id="checkbox8" />
              <label htmlFor="checkbox8"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle9', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle9 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle9')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle9',true) }} type="checkbox" id="checkbox9" />
              <label htmlFor="checkbox9"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle10', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle10 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle10')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle10',false) }} type="checkbox" id="checkbox10" />
              <label htmlFor="checkbox10"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle11', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle11 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle11')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle11',true) }} type="checkbox" id="checkbox11" />
              <label htmlFor="checkbox11"></label>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          {StylesChanger('Derazastyle12', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle12 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle12')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle12',true) }} type="checkbox" id="checkbox12" />
              <label htmlFor="checkbox12"></label>
            </div>
          </div>
        </div>
        <div>
          <div className={'newStyles'}>Yangi</div>
          {StylesChanger('Derazastyle13', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle13 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle13')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle13',true) }} type="checkbox" id="checkbox13" />
              <label htmlFor="checkbox13"></label>
            </div>
          </div>
        </div>

        <div>
          <div className={'newStyles'}>Yangi</div>
          {StylesChanger('Derazastyle14', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle14  shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'}>
            <div className={'round'}>
              <input checked={CheckMyStyles('Derazastyle14')} onChange={(e) => { AddMystyles(e.target.checked, 'Derazastyle14',false) }} type="checkbox" id="checkbox14" />
              <label htmlFor="checkbox14"></label>
            </div>
          </div>
        </div>
       <a href='https://t.me/bekmurodov_ogabek'>
       <div style={{cursor:'pointer'}} className={'AddNewStyles'}>
          <h1>+</h1>
          <h4>Yangi dizayn qoshtiring</h4>
        </div></a> 


      </div>
      <div>
        {/* <ButtonLink link='/deraza/styles' text='Dizayn qoshosh' clas='BtnSucc'/>   */}
      </div>
    </div>
    </>
   
  )
}

export default AllDerazaStyles