import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
