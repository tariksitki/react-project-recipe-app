
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login';
import Meals from './components/meals/Meals';
import Navbar from './components/navbar/Navbar';
import Main from './components/recipe/Main';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element = {<Main />} />
          <Route path='/about' element = {<About />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/meals' element = {<Meals />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


// https://recipe-app-solution.vercel.app/login