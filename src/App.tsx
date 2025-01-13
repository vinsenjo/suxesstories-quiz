
import Navbar from "./components/ui/navbar";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
