import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Home1 from './page/Home1';
import Store from './page/Store';
import Chat from './page/Chat';
import Profile from './page/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/store' element={<Store />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
