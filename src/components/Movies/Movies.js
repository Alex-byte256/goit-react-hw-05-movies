import { useEffect, useMemo, useState } from 'react';
import css from './Movies.module.css'
import { nanoid } from 'nanoid';
import { useSearchParams } from 'react-router-dom';


function Movies (){
  const[query, setQuery] = useState('');
  const[movies,setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US&page=1&include_adult=false&query=${query}`)
      .then(el => el.json()).then(el => {
        setMovies(el.results)
        setSearchParams({query:query})
    })
    // eslint-disable-next-line
  },[query])

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const {query: searchQuery} = params;

  const handleOnChange = (e)=>{
    setQuery(e.target.value)
  }



console.log(movies)

  return(
    <>
        <input onChange={handleOnChange} type="text" value={query}/>
      <div className={css.moviesList}>
        {movies?movies.map(el => (
          <div className={css.moviesItem} key={nanoid()}>
            <img width={400} src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={el.title || el.name}/>
            <h2>{el.name||el.title}</h2>
          </div>
        )):""}
      </div>
    </>
  )
}

export default Movies;
