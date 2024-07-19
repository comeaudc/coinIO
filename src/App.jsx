//Import Hooks and Components
import { Route, Routes } from 'react-router-dom';
import Price from './pages/Price';
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </>
  );
};

export default App;
