
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About.js';
import Rooms from './components/Rooms.js';
import RoomDetail from './components/RoomDetail.js';
import Contect from './components/Contect.js';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/roomDetail/:id' element={<RoomDetail/>}/>
        <Route path='/contact'element={<Contect/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}


export default App;