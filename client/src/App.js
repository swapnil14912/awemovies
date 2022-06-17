import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<MovieDetails/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
