import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import Layout from "./assets/pages/Layout";
import ProtectedRoute from "./assets/pages/ProtectedRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import Alert from "./assets/ui/Alert";
import { useRecoilValue } from "recoil";
import { alertState } from "./recoil/atom";
import { AlertState } from "./services/types";

function App() {
  useAuthCheck(); 

  const alert = useRecoilValue<AlertState>(alertState);
  return (
    <>
    {alert.isVisible && <Alert />}
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout><Home /></Layout>} />
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
