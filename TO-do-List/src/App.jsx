import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import TodoModel from "./components/TodoModel";
import TodoModelCard from "./components/TodoModelCard";

const App = () => {
  const handleTodoSubmit = (Tododata) => {
    // This function will handle the submission of task data
    console.log("Task submitted:", Tododata);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* Pass the handleTaskSubmit function as onSubmit prop */}
        <Route path="/TodoModel" element={<TodoModel onSubmit={handleTodoSubmit} />} />
        <Route path="/TodoModelCard" element={<TodoModelCard onSubmit={handleTodoSubmit} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;