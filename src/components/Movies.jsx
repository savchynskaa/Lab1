import Movie from './Movie';

const Movies = (props) => {

    const {movies = []} = props

    return (
        <div className='movies'>
            {movies.length ? movies.map((movie, index) => (
                <Movie key={movie.imdbID || index} {...movie}/>
            )) : <h4>Nothing Found</h4>
        }
        </div>
    )
}

export default Movies;