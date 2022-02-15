import React, {useReducer} from "react";
import ReviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer.js';
import MoviesReducer, { moviesInitialState } from '../reducers/moviesReducer.js';

export const reviewsContext = React.createContext();

export default function ReviewsProvider({children}){

    const [movies, setMovies] = useReducer(MoviesReducer, moviesInitialState)
    const [reviews,setReviews] = useReducer(ReviewsReducer, reviewsInitialState)

    const addReview = (movie,stars,comment)=>{
        /*let valueComment = comentario.current.value
        let stars = rating.current.value
        movie.stars= movie.stars + parseInt(stars)
        movie.numberOfReviews++*/
        setMovies({type:'addStars',movie,stars})
        setReviews({type:"addReview",idMovie:movie.id,comment:comment})
      }

    return <reviewsContext.Provider value={{reviews,addReview,setReviews}}>
        {children}
    </reviewsContext.Provider>
}