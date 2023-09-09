import Main from "./componets/Main";
import Navbar from "./componets/Navbar";
import  "./App.css"
import Footer from "./componets/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./componets/Login";
import {AuthProvider} from "./componets/context/authContext.js"
import Account from "./componets/account/Account";
import SingleProduct from "./componets/products/Single_product";
import Signup from "./componets/Signup";
function App() {
  return (
      <> 
    <AuthProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Main/>} ></Route>
        <Route path="auth/login" element={<Login/>} ></Route>
        <Route path="auth/register" element={<Signup/>}></Route>
        <Route path="/account/*" element={<Account/>}></Route>
        <Route path ="/products/:slug" element={<SingleProduct/>} ></Route>
      </Routes>
      <Footer/>
      </Router>
      </AuthProvider>
    </>
   
  );
}

export default App;
