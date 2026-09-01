const API_KEY = "05fd7bd5dda58c67593754097955b4a5"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        const data = await response.json()
        return data.results
    } catch(error) {
        console.error('Error fetching popular movies:', error)
        return []
    }
}

export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        return data.results
    } catch(error) {
        console.error('Error fetching search results:', error)
        return []
    }
}

