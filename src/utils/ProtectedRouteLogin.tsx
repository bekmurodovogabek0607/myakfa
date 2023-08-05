import { useContext} from 'react';
import AllDerazaStyles from "../pages/AllDerazaStyles";
import { AllEshikStyles } from "../pages/AllEshikStyles";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyDerazaStyles from "../pages/MyDerazaStyles";
import { MyEshikStyles } from "../pages/MyEshikStyles";
import { MyOrder } from "../pages/MyOrder";
import { OrderCart } from "../pages/OrderCart";
import { ProductPrice } from "../pages/ProductPrice";
import { Report } from "../pages/Report";
import SettingDeraza from "../pages/SettingDeraza";
import { SettingEshik } from "../pages/SettingEshik";
import { Tarif } from "../pages/Tarif";
import { Zakaz } from "../pages/Zakaz";
import { Context } from './Context';

export default function ProtectedRouteLogin(page: string): () => JSX.Element {
  
    const props=useContext(Context)
    console.log(props?.OneZakaz);
    
   // if( props?.User.name==undefined) return Login
    switch (page) {
        case 'Home':
            return Home
        case 'MyEshikStyles':
            return MyEshikStyles
        case 'MyDerazaStyles':
            return MyDerazaStyles
        case 'AllEshikStyles':
            return AllEshikStyles
        case 'AllDerazaStyles':
            return AllDerazaStyles
        case 'MyOrder':
            return MyOrder
        case 'OrderCart':
            return OrderCart
        case 'Report':
            return Report
        case 'SettingDeraza':
            return SettingDeraza
        case 'SettingEshik':
            return SettingEshik
        case 'Tarif':
            return Tarif
        case 'ProductPrice':
            return ProductPrice
        case 'Zakaz':
            return Zakaz


        default:
            return Login

    }

}
