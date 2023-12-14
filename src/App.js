import './App.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';
import { Contact } from './Pages/ContactUs/Contact';
import Design from './Pages/Services/serviceComponents/Design';
import Hoardings from './Pages/Services/serviceComponents/Hoardings';
import Idcards from './Pages/Services/serviceComponents/Idcards';
import IndoorAd from './Pages/Services/serviceComponents/IndoorAd';
import LetterBoard from './Pages/Services/serviceComponents/LetterBoard';
import Printer from './Pages/Services/serviceComponents/Printer';
import Trophy from './Pages/Services/serviceComponents/Trophy';
import VehicleBrand from './Pages/Services/serviceComponents/VehicleBrand';
import About from './Pages/AboutUs/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='AboutUs' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='ContactUs' element={<Contact/>}/>
        <Route path='/Design' element={<Design/>}/>
        <Route path='/Hoarding' element={<Hoardings/>}/>
        <Route path='/Idcard' element={<Idcards/>}/>
        <Route path='/Indoor' element={<IndoorAd/>}/>
        <Route path='/Letter' element={<LetterBoard/>}/>
        <Route path='/Printer' element={<Printer/>}/>
        <Route path='/Trophy' element={<Trophy/>}/>
        <Route path='/Vehicle' element={<VehicleBrand/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
