import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import { moviesContext } from '../context/MoviesProvider';
import { reviewsContext } from '../context/ReviewsProvider';
//import NotFound from './NotFound';

export default function Details() {
  const {id} = useParams()
  const {movies,setMovies} = useContext(moviesContext)
  const {reviews,addReview,setReviews} = useContext(reviewsContext)
  const comentario = useRef()
  const rating = useRef()
  //const navigate = useNavigate()

  const movie = movies.filter(movie=>movie.id===id)[0]
  console.log(movie);
  if(!movie){
    return <Navigate to="/notfound"/>
  }

  const add = ()=>{
    let comment = comentario.current.value
    let stars = rating.current.value
    addReview(movie,stars,comment)
  }

  console.log(reviews.reviews);
  
  return <div>
      
      <Movie movie={movie}></Movie>
      <div>
        <input ref={comentario} type="text"></input>
        <select ref={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={add}>Agregar review</button>
      </div>

      {reviews.length > 0 ? reviews.reviews.map(review=>review.idMovie===id&&<p>{review.comment}</p>) : null}

      {/* Mostrar comentarios */}
      
  </div>;
}


// Reto (miercoles): Incorporar lo que tenemos con reducers (useReducer)