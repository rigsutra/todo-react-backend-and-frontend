import SignIn from "./components/SignIn"
import Signup from "./components/Signup"
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./components/Home";

const App = () => {
 


  return (
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/Signup" element={<Signup/>} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
  </BrowserRouter>
  </>
    
  )
}

export default App
