import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Container from './Container/Container';
import MainLayout from './MainLayout/MainLayout';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <div>
      <Container>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>}/>
        </Route>
      </Routes>
      </Container>
    </div>
  );
};
