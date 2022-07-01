import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="cent">
				<div className='Section-center'>
					<img className= "img" src={movie.Poster} alt='movie'></img>
					<h6>{movie.Title}</h6>
				</div>
				</div>
			))}
		</>
	);
};

export default MovieList;