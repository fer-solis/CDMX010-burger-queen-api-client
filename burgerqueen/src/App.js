import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';
import Delivered from './pages/delivered/Delivered';
import Kitchen from './pages/kitchen/Kitchen';
import Administration from './pages/administration/Administration';



function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" render={(props)=><Home{...props}/>} />
        <Route path="/orders" render={(props)=><Orders{...props}/>} />
        <Route path="/delivered" render={(props)=><Delivered{...props}/>} />
        <Route path="/kitchen" render={(props)=><Kitchen{...props}/>} />
        <Route path="/administration" render={(props)=><Administration{...props}/>} />
    </Switch>      
</Router>
  )
}

export default App;