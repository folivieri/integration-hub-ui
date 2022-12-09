import React from 'react';
import './App.css';
import Welcome from './Welcome';
import WelcomeLogin from './WelcomeLogin';
import SkyHiveSignUp from './SkyHiveSignUp';
import PartnerLogin from './PartnerLogin';
import History from './History';
import HCM1Form from './ihComponents/HCM1Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/Connect" element={<Welcome/>}/>
          <Route exact path="/" element={<WelcomeLogin/>}/>
          <Route exact path="/SkyHiveSignUp" element={<SkyHiveSignUp/>}/>
          <Route exact path="/HCM1Form/:partner" element={<HCM1Form/>}/>
          <Route exact path="/PartnerLogin/:partner" element={<PartnerLogin/>}/>
          <Route exact path="/History/:partner/:customerId" element={<History/>}/>
        </Routes>
      </Router>
  )
}

export default App;