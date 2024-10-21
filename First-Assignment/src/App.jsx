import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import  Navbar from './component/Navbar'
import Incidents from './component/Incidents'
import NewIncident from './component/NewIncident'

function App() {
 
 

  return (
    <>
   
   <BrowserRouter>
   < Navbar/>
   < Routes>
   <Route path="/" element={<Incidents />} />
   <Route path="/NewIncident " element={<NewIncident/>} />
   </ Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App;
