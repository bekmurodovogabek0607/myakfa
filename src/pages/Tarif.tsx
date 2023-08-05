import Navbar from "../Component/Navbar"
import type { RadioChangeEvent } from 'antd';
import {  Radio, Space } from 'antd';
import { useState } from "react";
import './pages.scss'

export const Tarif = () => {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="corpushTarif">
        
        <Radio.Group style={{width:'100%'}} onChange={onChange} value={value}>
        <Space style={{width:'100%'}} direction="vertical">

          <div style={value==1?{borderColor:"rgb(0, 22, 117)"}:{}} className="TarifChange"><Radio style={{width:'100%',padding:'15px',fontSize:'18px',fontWeight:'bold',color:'white'}} value={1}>1 oylik</Radio><h3 style={value==1?{color:'rgb(0, 22, 117)'}:{}}>25.000 </h3><label className="joriytarif">Joriy tarif</label><div className="tarifstylesuchun"></div></div>
          <div style={value==3?{borderColor:"rgb(0, 22, 117)"}:{}} className="TarifChange"><Radio style={{width:'100%',padding:'15px',fontSize:'18px',fontWeight:'bold',color:'white'}} value={3}>3 oylik</Radio><h3 style={value==3?{color:'rgb(0, 22, 117)'}:{}}>65.000</h3><div className="tarifstylesuchun"></div></div>
          <div style={value==6?{borderColor:"rgb(0, 22, 117)"}:{}} className="TarifChange"><Radio style={{width:'100%',padding:'15px',fontSize:'18px',fontWeight:'bold',color:'white'}} value={6}>6 oylik</Radio><h3 style={value==6?{color:'rgb(0, 22, 117)'}:{}}>120.000</h3><div className="tarifstylesuchun"></div></div>
          <div style={value==12?{borderColor:"rgb(0, 22, 117)"}:{}} className="TarifChange"><Radio style={{width:'100%',padding:'15px',fontSize:'18px',fontWeight:'bold',color:'white'}} value={12}>12 oylik</Radio><h3 style={value==12?{color:'rgb(0, 22, 117)'}:{}}>200.000</h3><div className="tarifstylesuchun"></div></div>

         

          
        </Space>
      </Radio.Group>
      <button>Tarifni joriy qilish</button>
       </div>
      </>
      
  )
}
