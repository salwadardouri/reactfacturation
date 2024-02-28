// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignInForm from './components/auth/SignInForm';
import Accueil from './components/Accueil';
import AccueilClient from './components/client/AccueilClient';
import CreateCompte from './components/admin/CreateCompte';
import DashEmployeur from './components/employeur/DashEmployeur';
import Dashboard from './components/admin/dashboard';





function App() {
  return (
    <Router>
      <div>
        <NavBar />
  
        <Routes>
   
        <Route path="/" element={<Accueil />} /> {/* Mettez à jour le chemin selon vos besoins */}
          <Route path="/SignIn" element={<SignInForm />} /> {/* Mettez à jour le chemin selon vos besoins */}
          <Route path="/Client" element={<AccueilClient/>} /> {/* Mettez à jour le chemin selon vos besoins */}
          <Route path="/CreateCompte" element={<CreateCompte/>} /> {/* Mettez à jour le chemin selon vos besoins */}
          <Route path="/DashAdmin" element={<Dashboard/>} />
          <Route path="/DashEmployeur" element={<DashEmployeur/>} />
        </Routes>

      </div>
    </Router>
  
     
  );
}

export default App;
