

import './App.css'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Component/Navbar';
import { MyEshikStyles } from './pages/MyEshikStyles';
import MyDerazaStyles from './pages/MyDerazaStyles';
import { AllEshikStyles } from './pages/AllEshikStyles';
import AllDerazaStyles from './pages/AllDerazaStyles';
import { MyOrder } from './pages/MyOrder';
import { OrderCart } from './pages/OrderCart';
import { Report } from './pages/Report';
import SettingDeraza from './pages/SettingDeraza';
import { SettingEshik } from './pages/SettingEshik';
import { Tarif } from './pages/Tarif';
import { ProductPrice } from './pages/ProductPrice';
import GlobalProvayder from './utils/Context';
import { Zakaz } from './pages/Zakaz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <><GlobalProvayder>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/myeshik" component={MyEshikStyles} />
        <Route exact path="/myderaza" component={MyDerazaStyles} />
        <Route exact path="/alleshik" component={AllEshikStyles} />
        <Route exact path="/allderaza" component={AllDerazaStyles} />
        <Route exact path="/myorder" component={MyOrder} />
        <Route exact path="/cart" component={OrderCart} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/setting/deraza" component={SettingDeraza} />
        <Route exact path="/setting/eshik" component={SettingEshik} />
        <Route exact path="/setting/tarif" component={Tarif} />
        <Route exact path="/setting/productprice" component={ProductPrice} />
        <Route exact path="/zakaz" component={Zakaz} />





      </Switch>
      <ToastContainer />
    </GlobalProvayder>

    </>
  )
}

export default App
