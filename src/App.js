import logo from './logo.svg';
import './App.css';
import Addstudent from './componenets/Addstudent';
import Search from './componenets/Search';
import Viewall from './componenets/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Addstudent/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
