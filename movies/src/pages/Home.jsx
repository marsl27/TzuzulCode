import React, { useContext } from 'react';
import Movies from '../components/Movies';
import { moviesContext } from '../context/MoviesProvider';

export default function Home() {
    const {movies} = useContext(moviesContext)
    return <div className='page'>
        <Movies movies={movies}/>
    </div>;
}
