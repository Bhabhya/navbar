import Base from './components/Base';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Base></Base>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    

    </Routes>
    
    </BrowserRouter>
 
    </div>
  )
}

export default App
