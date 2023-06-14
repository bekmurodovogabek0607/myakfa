

import './App.css'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Component/Navbar';
function App() {


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </>
  )
}

export default App
