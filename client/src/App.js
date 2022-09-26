import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext"

function App() {
  const {user} = useContext(AuthContext)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home />: <Navigate to="/register"/>} />
        <Route path="/movies" element={user ? <Home type="movie"/>: <Navigate to="/register"/>} />
        <Route path="/series" element={user ? <Home type="series"/>: <Navigate to="/register"/>} />
        <Route path="/watch" element={user ? <Watch /> : <Navigate to="/register"/>}/>

        <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>} />
        <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;