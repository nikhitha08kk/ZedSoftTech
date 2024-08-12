
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './Component/Login';
import ListView from './Component/ListView';
import DetailView from './Component/DetailView';

function App() {
  return (
    <div >
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/list" element={<ListView/>}/>
      <Route path="/detailed/:id" element={<DetailView/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
