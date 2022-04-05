
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Main from './components/recipe/Main';

function App() {
  fetch("https://api.edamam.com/search?q=dinner&q=bread&app_id=bb69260a&app_key=d4cca3d279e3b8117f12aacef3c04159")
  .then(res => res.json())
  .then(data => console.log(data))
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/recipe' element = {<Main />} />
          <Route path='/about' element = {<About />} />
          <Route path='/login' element = {<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


// https://recipe-app-solution.vercel.app/login