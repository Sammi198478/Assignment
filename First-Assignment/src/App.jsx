
import NewIncident from './component/NewIncident';
import Incidents from './component/Incidents';
import Navbar from './component/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav2 from './component/Nav2';
import Dashboard from './component/Dashboard';
import NewIncidentData from './component/NewIncidentData';
import Nav3 from './component/Nav3';

function App() {
  return (
    <BrowserRouter>

<Navbar />
      <Routes>
        <Route path='' element={<Nav2/>}>
        <Route path='' element={<Nav3/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}/>
        
        </Route>
        
        <Route path='' element={<Nav2/>}>
        <Route path="/newincident" element={<Incidents/>} />
        <Route path="/newincident/new" element={<NewIncident/>} />
        <Route path='/newincident/new/data' element={<NewIncidentData />} />
        
       
         
         </Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

