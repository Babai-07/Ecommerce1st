
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/extra/Icon.css';
import './App.css';
import Home from './pages/Home';
import Program from './pages/Program';
import Icon from './extra/Icon';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Program />}/>
      <Route path="/extra" element={<Icon/>}/>
      {/* <Route path="/extraHome" element={<Extrahome/>}/> */}
      {/* <Route path="/shop" element={<Shop />}/> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
