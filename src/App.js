import './App.css';
import Employee from './Components/Employee';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListEmployee from "./Components/ListEmployee";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<ListEmployee/>}></Route>
          <Route path='/employee/save' element={<Employee/>}></Route>
          <Route path='/editEmployee/:id' element={<Employee/>}></Route>
        </Routes>
     <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
