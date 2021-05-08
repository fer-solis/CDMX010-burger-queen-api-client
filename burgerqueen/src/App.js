import React, { useState, useEffect } from 'react';
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
import { auth } from './Firebase'


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log('user is logged in')
        setUser(user)
      } else {
        console.log('user is logged out')
        setUser(false)
      }
    })
  }, [])

  return (
    <div className="App">
      {user !== null ? (
        <Router>
        <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>
            <Route path="/orders">
              <Orders user={user}/>
            </Route>
            <Route path="/delivered">
              <Delivered user={user}/>
            </Route>
            <Route path="/kitchen">
              <Kitchen user={user}/>
            </Route>
            <Route path="/administration">
              <Administration user={user}/>
            </Route>
        </Switch>      
        </Router> 
      ) : <p> Loading ... </p>
      }
    </div>

  )
}

export default App;



