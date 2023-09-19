
// import './app.css'

import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL=`http://localhost:3001/`;

// axios.defaults.baseURL = `https://drivers-app-production.up.railway.app/`;






function App() {
  const location = useLocation();

  return (
 <div className="App">

  <Routes>
   <Route exact path="/" element={<Landing/>} />
   <Route exact path="/home" element={<Home/>}/>
   <Route exact path="/detail/:id" element={<Detail/>}/>
   <Route exact path="/create" element={<Form/>}/>
  </Routes>

  {location.pathname !=="/" && <Navbar/>}
 </div>
  );
}

export default App;
