import { Routes, Route } from "react-router-dom";
import Header from "./Header-footer/Header";
import Footer from "./Header-footer/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Todo from "./components/Todo";
import Task from "./components/Task";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedin(true);
    }
  }, []);

  return (
    <div>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<SignIn setIsLoggedin={setIsLoggedin} />} />
        <Route
          path="home"
          element={
            isLoggedin ? <Home /> : <SignIn setIsLoggedin={setIsLoggedin} />
          }
        />
        <Route
          path="signin"
          element={<SignIn setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="signup" element={<Signup />} />
        <Route path="todo" element={<Todo />} />
        <Route path="task" element={<Task />} />
      </Routes>
      <Footer isLoggedin={isLoggedin} />
    </div>
  );
}

export default App;
