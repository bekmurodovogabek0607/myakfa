

import './App.css'
import { Route, Switch } from 'react-router-dom';

import GlobalProvayder from './utils/Context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalPage from './Component/Modal';


import Register from './pages/Registratsiya';
import ProtectedRoute from './utils/ProtectedRoute';
import ProtectedRouteLogin from './utils/ProtectedRouteLogin';



function App() {


  return (
    <><GlobalProvayder>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={ProtectedRouteLogin('Home')} />
        <Route exact path="/myeshik" component={ProtectedRouteLogin('MyEshikStyles')} />
        <Route exact path="/myderaza" component={ProtectedRouteLogin('MyDerazaStyles')} />
        <Route exact path="/alleshik" component={ProtectedRouteLogin('AllEshikStyles')} />
        <Route exact path="/allderaza" component={ProtectedRouteLogin('AllDerazaStyles')} />
        <Route exact path="/myorder" component={ProtectedRouteLogin('MyOrder')} />
        <Route exact path="/cart" component={ProtectedRouteLogin('OrderCart')} />
        <Route exact path="/report" component={ProtectedRouteLogin('Report')} />
        <Route exact path="/setting/deraza" component={ProtectedRouteLogin('SettingDeraza')} />
        <Route exact path="/setting/eshik" component={ProtectedRouteLogin('SettingEshik')} />
        <Route exact path="/setting/tarif" component={ProtectedRouteLogin('Tarif')} />
        <Route exact path="/setting/productprice" component={ProtectedRouteLogin('ProductPrice')} />
        <Route exact path="/zakaz" component={ProtectedRouteLogin('Zakaz')} />
        <Route exact path="/login" component={ProtectedRoute} />
        <Route exact path="/register" component={Register} />


      </Switch>
      {/* <ControlledOpenSpeedDial/> */}
      <ToastContainer />
      <ModalPage />

    </GlobalProvayder>

    </>
  )
}

export default App
