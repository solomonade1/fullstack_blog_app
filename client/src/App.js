import Topbar from "./components/topbar/Topbar.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Write from "./pages/write/Write.jsx";
import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";
function App() {
  const {user }= useContext(Context)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register /> } />
        <Route exact path="/posts" element={ <Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
