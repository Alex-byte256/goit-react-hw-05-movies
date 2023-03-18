import { Link, Outlet,  useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';



function MovieDetails () {
  const[movie , setMovie] = useState({})
  const {movieId} = useParams()


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US`)
      .then(el => el.json()).then(el =>{
      setMovie({ ...el })
    })
  },[movieId])

  return (
    <>
      {
        movie && <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.original_title} />
        <h2>{movie.title || movie.original_title}</h2>
        <p>Дата випуску: {movie.release_date}</p>
        <Link to={`cast`}>Акторський склад</Link>
        <br/>
        <Link to={`reviews`}>Інформація про огляди</Link>
        </div>
      }

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </>
  )
}

export default MovieDetails;
