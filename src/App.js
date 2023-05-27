import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import './styles/style.scss'
import Movies from "./pages/Movies/Movies";
import OneFilm from "./pages/OneFilm/OneFilm";

function App() {
  return (
    <>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/movies'} element={<Movies/>}/>
          <Route path={'/film/:id'} element={<OneFilm/>}/>
        </Route>
        <Route path={'/register'} element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
