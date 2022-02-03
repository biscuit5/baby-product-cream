
import './App.css';
import React from 'react';
import{
        BrowserRouter,
        Routes,
        Route,



      } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Home/Footer/Footer';
import Explore from './pages/Explore/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home></Home>}/>
                        <Route path="home" element={<Home></Home>}/>
                        <Route path="explore" element={
                                <PrivateRoute>
                                    <Explore></Explore>
                                </PrivateRoute>
                        }/>
                        <Route path="login" element={<Login></Login>}/>
                        <Route path="register" element={<Register></Register>}/>
                        <Route path="footer" element={<Footer></Footer>}/>


                </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
