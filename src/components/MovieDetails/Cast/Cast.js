import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Cast () {
  const {movieId} = useParams()
  const [cast, setCast] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US`)
      .then(el => el.json()).then(el => {
        setCast(el.cast);
    })
  },[movieId])

  return(
    <>
      { cast && <div>
        Актори
        <ul>
          {cast.map(el=>{
          return  <li key={el.id}>
            <p>{el.name||el.original_name}</p>
            <img width="70" src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} alt={el.name||el.original_name}/>
          </li>

          })}
        </ul>
      </div>

      }
    </>
  )
}

export default Cast;
