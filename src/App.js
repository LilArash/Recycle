import { AddAdress } from './pages/AddAdress'
import { AddressList } from './pages/AddressList';
import { AddRequest } from './pages/AddRequest';
import { Requests } from './pages/Requests';
import { Points } from './pages/Points';
import { RequestDetail } from './pages/RequestDetail';
import { AwardDetail } from './pages/AwardDetail';
import { AllRequests } from './admin/AllRequests';
import { AllRequestDetail } from './admin/AllRequestDetail'
import { DriversStatus } from './admin/DriversStatus';
import { AddAward } from './admin/addaward';
import { RegisteredAwards } from './admin/RegisteredAwards';
import { RegAwardDetail } from './admin/RegAwardDetail';
import { DriverLoc } from './admin/DriverLoc';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (



    <Routes>
      <Route path="/addresses" element={<AddressList />} />
      <Route path="/addaddress" element={<AddAdress />} />
      <Route path="/addrequest" element={<AddRequest />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/requests/:id" element={<RequestDetail />} />
      <Route path="/awards" element={<Points />} />
      <Route path="/awards/:id" element={< AwardDetail />} />
      <Route path="/allreqs" element={< AllRequests />} />
      <Route path="/allreqs/:id" element={<AllRequestDetail />} />
      <Route path="/driversstatus" element={<DriversStatus />} />
      <Route path="/addaward" element={<AddAward />} />
      <Route path="/registeredawards" element={<RegisteredAwards />} />
      <Route path="/registeredawards/:id" element={<RegAwardDetail />} />
      <Route path="/driverlocation" element={<DriverLoc />} />
    </Routes>

  );
}

export default App;
