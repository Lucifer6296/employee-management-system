import './App.css'
import HeaderComponent from './Components/HeaderComponent.jsx'; 
import ListEmployeeComponent from './Components/ListEmployeeComponent.jsx';
import FooterComponent from './Components/FooterComponent.jsx';
import{BrowserRouter,Route,Routes } from 'react-router-dom';
import EmployeeComponent from './Components/EmployeeComponent.jsx';


function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
      <div className='flex-grow-1 main content'>
      <HeaderComponent />
      
      <Routes>
        <Route path='/' element={<ListEmployeeComponent />} />
        <Route path='/employees' element={<ListEmployeeComponent />} />
        <Route path='/add-employee' element={<EmployeeComponent />} />
        <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        
      </Routes>
      </div>
      <FooterComponent />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
