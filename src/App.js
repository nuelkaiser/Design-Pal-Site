import './App.css';
import Home from './Main Page/Home';
import Why from './Main Page/Why';
import Tutor from './Main Page/Tutor';
import Regis from './Main Page/Regis';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='why' element={<Why />} />
          <Route path='tutor' element={<Tutor />} />
          <Route path='regis' element={<Regis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
