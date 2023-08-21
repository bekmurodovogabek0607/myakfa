import '../Component/allderaza/allderaza.scss'

import { useContext, useState } from 'react'
import { Context } from '../utils/Context'
import Navbar from '../Component/Navbar'
import StylesChanger from '../utils/StylesChanger'
import Login from './Login'





const AllDerazaStyles = () => {
  const props = useContext(Context)
  const [nimadir,setnimadir]=useState<number>(0)
  // function AddMystyles(check: boolean, style: string,arka:boolean) {

  //   if (check) props?.setMyDerazaStyles([...props.MyDerazaStyles, {styles:style,arka:arka,foiz:0 ,price:0}])


  //   else {
  //     props?.setMyDerazaStyles(props.MyDerazaStyles.filter(item => item.styles != style))
  //   }
  // }
  // function CheckMyStyles(style: string): boolean {
  //   if (props?.MyDerazaStyles.filter(item => item.styles == style).length == nimadir) return false
  //   return true

  // }
  // function AddAllMystyles(check: boolean) {

  //   if (check) props?.setMyDerazaStyles([
  //      {styles:'Derazastyle1',arka:false,foiz:0 ,price:0},
  //      {styles:'Derazastyle2',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle3',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle4',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle5',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle6',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle7',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle8',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle9',arka:true ,foiz:0 ,price:0},
  //      {styles:'Derazastyle10',arka:false ,foiz:0 ,price:0},
  //      {styles:'Derazastyle11',arka:true ,foiz:0 ,price:0},
  //      {styles:'Derazastyle12',arka:true ,foiz:0 ,price:0},
  //      {styles:'Derazastyle13',arka:true ,foiz:0 ,price:0},
  //      {styles:'Derazastyle14',arka:false ,foiz:0 ,price:0},

      
  //     ])


  //   else {
  //     props?.setMyDerazaStyles([])
  //   }
  // }



  return (
    <>
     {props?.User.name==''?<Login/>:  <> 
    <Navbar/>
    <div className={'AllDeraza'}>
      <div>
        <h2>Dizaylarni qoshing{nimadir}</h2>
        
      </div>
      <div>
        
        <div>
          <div className={'newStyles'}>yangi</div>
          {StylesChanger('Derazastyle2', 'rgb(160, 64, 0)',setnimadir,setnimadir)}
          {/* <Derazastyle2 shishaColor={' rgb(143, 247, 238)'} derazaColor={'rgb(160, 64, 0)'} seerazmer={'block'} /> */}
          <div className={'container'} style={{display:'flex',justifyContent:'center',width:"80%"}}>
            <div className={'round'} style={{display:'flex',justifyContent:'space-between',width:'100%',top:"150px"}}>
              <p style={{fontFamily:'cursive',margin:'0px',color:"blue",fontWeight:"bold",fontSize:'15px',paddingRight:'10px'}}>+16% </p>
              <p style={{fontFamily:'cursive',margin:'0px',color:"blue",fontWeight:"bold",fontSize:'15px',paddingLeft:"10px"}}>+40000 </p>
              

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
    </>}
    </>
  
   
  )
}

export default AllDerazaStyles