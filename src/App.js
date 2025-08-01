import logo from './logo.svg';
import { AddAdress } from './pages/AddAdress'
import { AddressCard } from './components/AddressCard';
import { AddressList } from './pages/AddressList';
import { AddRequest } from './pages/AddRequest';
import { RequestCard } from './components/RequestCard'
import { Requests } from './pages/Requests';
import { Points } from './pages/Points';
import { AwardCard } from './components/AwardCard';
import { RequestDetail } from './pages/RequestDetail';
import { AwardDetail } from './pages/AwardDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (



    <Routes>
      <Route path="/requests" element={<Requests />} />
      <Route path="/requests/:id" element={<RequestDetail />} />
      <Route path="/awards" element={<Points />} />
      <Route path="/awards/:id" element={< AwardDetail />} />
    </Routes>
    // <div>
    //   <AwardDetail />
    // </div>

  );
}

export default App;
