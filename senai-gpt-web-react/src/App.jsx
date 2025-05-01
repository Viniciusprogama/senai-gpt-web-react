import { BrowserRouter, Route, Routes, UNSAFE_DataRouterStateContext } from "react-router-dom"
import Login from "./pages/login"
import Chat from "./pages/chat"

function App() {

    const isAuthenticated = () =>{

      let token = localStorage.getItem("meuToken");

      if (token == null){
      
        return false;

      }else{

        return true;

      }

    } 

  return (
    <>
  <BrowserRouter>
     <Routes>
      
      <Route path="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/chat" element={isAuthenticated() == true? <Chat/> : <h1>sai daqui vc n tem autorizacao</h1>}></Route>
      <Route path="/*" element={<h1>Not found</h1>}></Route>
      <Route path="/nuserclick" element={<Login/>}></Route>
      

    </Routes>

   </BrowserRouter>
    </>
  )
}
export default App
