import Main from "./componets/Main";
import Navbar from "./componets/Navbar";
import css from "./App.css"
import Footer from "./componets/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./componets/Login";

function App() {
  return (
      <> 
      <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element ={<Main/>} ></Route>
        <Route path="auth/login" element={<Login/>} ></Route>
      </Routes>
      <Footer/>
      </Router>
    </>
   
  );
}

export default App;
