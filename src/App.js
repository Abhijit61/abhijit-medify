import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Finddoctors from './Components/Finddoctors';
import Mybookings from './Components/Mybookings';
import { MyContextProvider } from  "./Components/MyContext"


function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/finddoctors" element={<Finddoctors/>}/>
          <Route path="/hospitals" element={<Home/>}/>
          <Route path="/medicines" element={<Home/>}/>
          <Route path="/sergeries" element={<Home/>}/>
          <Route path="/softwareforprovider" element={<Home/>}/>
          <Route path="/facilities" element={<Home/>}/>
          <Route path="/bookings" element={<Mybookings/>}/>
          <Route path="/contactus" element={<Home/>}/>
          <Route path="/aboutus" element={<Home/>}/>
          <Route path="/pricing" element={<Home/>}/>
          <Route path="/faq" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
