import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Nav from "./pages/Nav/Nav";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
