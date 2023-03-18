import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Home.module.css'
import { Link } from 'react-router-dom';


function Name() {
  const[movies,setMovies]= useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=9095dc0682bb2e62c57b5cbea7d9ca43")
      .then(el=>el.json()).then(el=>{
        setMovies(el.results)
    })
  },[])

  return(
    <div className={css.moviesList}>
      {movies?movies.map(el => ( <Link key={nanoid()} to={`movies/${el.id}`}>
          <div className={css.moviesItem} >
            <img width={400} src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={el.title || el.name}/>
            <h2>{el.name||el.title}</h2>
          </div>
        </Link>
      )):""}
    </div>
  )
}

export default Name;
