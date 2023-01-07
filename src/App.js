import {Route, Router, Routes } from "react-router-dom";
import User from "./components/Data_user/User";
import Form from "./components/Form/Form";


function App() {
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Form/>}   />
      <Route exact path="/user" element={<User/>}   />

      </Routes>
    </>

  )
    
}

export default App;
