import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import User from "./pages/User";
import CreateUser from "./pages/CreateUser";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import CreateMovie from "./pages/CreateMovie";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Lists from "./pages/ListsLists";
import CreateLists from "./pages/CreateLists";
import List from "./pages/List"

function App() {
  const {user} = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
      <div className="container">
      {user && <Sidebar />}
        <Routes>
            <Route path="/" element={<SemiProtected><Home/></SemiProtected>}/>
            <Route path="/users" element={<SemiProtected><UserList/></SemiProtected>}/>
            <Route path="/users/create" element={<SemiProtected><CreateUser/></SemiProtected>}/>
            <Route path="/users/:userId" element={<SemiProtected><User/></SemiProtected>}/>
            <Route path="/movies" element={<SemiProtected><MovieList/></SemiProtected>}/>
            <Route path="/movie/:id" element={<SemiProtected><Movie/></SemiProtected>}/>
            <Route path="/movie/create" element={<SemiProtected><CreateMovie/></SemiProtected>}/>
            <Route path="/list/:id" element={<SemiProtected><List/></SemiProtected>}/>
            <Route path="/list/create" element={<SemiProtected><CreateLists/></SemiProtected>}/>
            <Route path="/lists" element={<SemiProtected><Lists/></SemiProtected>}/>
            <Route path="/login" element={<LoginProtected><Login/></LoginProtected>}/>
          </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



const SemiProtected = ({ children }) => {
  const {user} = useContext(AuthContext)

 return (!user ? (<Navigate to={"/login"} />) : (children))
};

const LoginProtected = ({ children }) => {
  const {user} = useContext(AuthContext)

 return (user ? (<Navigate to={"/"} />) : (children))
};



// 2 53 00