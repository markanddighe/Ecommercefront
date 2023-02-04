import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SignUp from './Components/Sign-Up';
import SignIn from './Components/Sign-In';
import Nav from './Components/Nav';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
    <Nav />

    <Routes>
    <Route path="/api/get" element={<ProductList />}></Route>
    
    <Route path="/register" element={<SignUp />}></Route>

    <Route path='/login' element={<SignIn />}></Route>

    <Route path="/add" element={<AddProduct />}></Route>



    </Routes>


    </BrowserRouter>


    </div>
  );
}

export default App;
