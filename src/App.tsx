import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import Layout from "./assets/pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
