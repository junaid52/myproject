import {Fragment, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawerMini from './components/SideDrawerMini/SideDrawerMini';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Home from './pages1/Home';
function App() {
const [show, setShow] = useState(false);
const sideDrawerHandler = () => {
  setShow(!show);
}
  return (
    <Fragment>
      <Header sideDrawerHandler={sideDrawerHandler} show={show} />
      {!show && <SideDrawerMini />}
      {show && <SideDrawer />}
      <Home show={show} />
    </Fragment>
      
  );
}

export default App;
