import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PrivateRoute from './PrivateRoute/PrivateRoute';
import ConfirmHotel from './ConfirmHotel/ConfirmHotel';
import Login from './Login/Login';

export const UserContext = createContext();




function App() {
  const [logInData, setlogInData] = useState({});
  
  return (
    <div className = 'Main' >
    
    
      <UserContext.Provider value = {[logInData, setlogInData]}>
      
      <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path= '/home'>
              <Home></Home>
            
          
            

          </Route>
          <Route path="/login">
            <Login></Login>
            
            

          </Route>
          <PrivateRoute path= '/confirm/:place'>
            <ConfirmHotel></ConfirmHotel>
          </PrivateRoute>
      
      </Switch>
      </Router>
      </UserContext.Provider>
      
    
    </div>
  );
}

export default App;
