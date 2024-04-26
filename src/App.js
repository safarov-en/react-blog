import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Write from './pages/write/write';
import Settings from './pages/settings/settings';
import Single from './pages/single/single';
import TopBar from "./components/topbar/topbar";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
