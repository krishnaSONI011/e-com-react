import Main from "./componets/Main";
import Navbar from "./componets/Navbar";
import css from "./App.css"
import Footer from "./componets/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./componets/Login";
import {AuthProvider} from "./componets/context/authContext.js"
function App() {
  return (
      <> 
    <AuthProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Main/>} ></Route>
        <Route path="auth/login" element={<Login/>} ></Route>
      </Routes>
      <Footer/>
      </Router>
      </AuthProvider>
    </>
   
  );
}

export default App;
