
// get movies
export const getMoviesStart = () =>({
    type: "GET_MOVIE_START"
})
export const getMoviesSuccess = (movies) =>({
    type: "GET_MOVIE_SUCCESS",
    payload: movies
})
export const getMoviesFalure = () =>({
    type: "GET_MOVIE_FAILURE"
})

///// delete

export const deleteMovieStart = () =>({
    type: "DELETE_MOVIE_START"
})
export const deleteMovieSuccess = (id) =>({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
})
export const deleteMovieFalure = () =>({
    type: "DELETE_MOVIE_FAILURE"
})


// create movies
export const createMovieStart = () =>({
    type: "CREATE_MOVIE_START"
})
export const createMovieSuccess = (movie) =>({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
})
export const createMovieFailure = () =>({
    type: "CREATE_MOVIE_FAILURE"
})

// pudate movies
export const updateMovieStart = () =>({
    type: "UPDATE_MOVIE_START"
})
export const updateMovieSuccess = (movie) =>({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie
})
export const updateMovieFailure = () =>({
    type: "UPDATE_MOVIE_FAILURE"
})
