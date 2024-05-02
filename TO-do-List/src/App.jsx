import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import TodoModel from "./components/TodoModel"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/TodoModel" element={<TodoModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
