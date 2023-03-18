import { Route, Routes } from 'react-router-dom';
import { lazy} from "react";
const Home = lazy(() => import("./Home/Home"));
const Container = lazy(() => import("./Container/Container"));
const MainLayout = lazy(() => import("./MainLayout/MainLayout"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./MovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("./MovieDetails/Reviews/Reviews"));


export const App = () => {
  return (
    <div>
      <Container>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>} >
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
      </Container>
    </div>
  );
};
