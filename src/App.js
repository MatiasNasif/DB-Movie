import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css" 
import MoviesGrid from "./components/MoviesGrid";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register"
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MoviesGrid/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
