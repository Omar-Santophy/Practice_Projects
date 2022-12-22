import logo from "./logo.svg";
import "./App.css";
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import Todo from "./Component/Todo";
// import CrudOperation from "./Component/CrudOperation";
// import NextCrud from "./Nextcrud";
// import Newproject from "./Newproject"
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct"
import AddProduct from "./AddProduct"
function App() {
  return (  
    <div>
      {/* <Todo /> */}  
      {/* <CrudOperation /> */}
      {/* <NextCrud/> */}
      {/* <Newproject/> */}
      <BrowserRouter>
      <Header/>
      <h2>eCommerce website</h2>
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/update" element={<UpdateProduct />}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        
      </Routes>
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;
