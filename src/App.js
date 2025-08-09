import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Adm from './Pages/AdmPage/Adm.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/adm' element={<Adm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
