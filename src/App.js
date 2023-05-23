import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";


//media
import './styles/style.scss'
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path={'/'} element={<Home/>}/>
            <Route path={'/movies'} element={<Movies/>}/>
        </Route>
        <Route path={'/register'} element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
