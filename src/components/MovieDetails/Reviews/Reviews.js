import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Reviews () {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US&page=1`)
      .then(el => el.json()).then(el => setReviews(el.results))
  },[movieId])

  return (
    <>{reviews &&
      <ul>
        { reviews.map(el => {
      return <li key={el.id}>
        <h3>{el.author}</h3>
        <p>{el.content}</p>
        <p> <b>Опубліковано:</b>  {el.created_at}</p>
        <p> <b>Оновлено:</b>  {el.updated_at}</p>
        <hr/>
      </li>
      })}
      </ul>
    }

    </>
  )
}

export default Reviews;
