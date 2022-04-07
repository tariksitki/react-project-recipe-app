
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/about/About';
import Login from '../components/login/Login';
import Meals from '../components/recipe/Meals';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/recipe/Main';
import Details from '../components/details/Details';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Main />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
