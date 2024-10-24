
import NewIncidents from './component/NewIncident';
import Incidents from './component/Incidents';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Incidents />} />
        <Route path="/new-incident" element={<NewIncidents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

