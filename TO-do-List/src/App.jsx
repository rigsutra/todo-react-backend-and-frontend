import { Routes, Route } from "react-router-dom";
import Header from "./Header-footer/Header";
import Footer from "./Header-footer/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import TodoModelCard from "./components/TodoModelCard";
import Cardscomponent from "./components/Cardscomponent";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signin"
          element={<SignIn setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="signup" element={<Signup />} />
        <Route path="todo" element={<TodoModelCard />} />
        <Route path="card" element={<Cardscomponent />} />
      </Routes>
      <Footer isLoggedin={isLoggedin} />
    </div>
  );
}

export default App;
