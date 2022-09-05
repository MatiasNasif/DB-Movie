import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css" 
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register"
import Login from "./components/Login";
import Favorites from "./components/Favorites"
import UsersGrid from "./components/UsersGrid";
import Home from "./components/Home";
import SearchGrid from "./components/SearchGrid";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/search/:value" element={<SearchGrid/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/profile" element={<Profile/>} />

          <Route path="/admin/users" element={<UsersGrid/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
