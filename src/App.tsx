
import Navbar from "./components/ui/navbar";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
