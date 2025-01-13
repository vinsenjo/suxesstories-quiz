
import Navbar from "./components/ui/navbar";
import Quiz from "./pages/Quiz"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
