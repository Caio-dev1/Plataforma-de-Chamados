import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
