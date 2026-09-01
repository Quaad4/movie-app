
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import '../css/Home.css'
import {getPopularMovies, searchMovies} from "../services/api"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`)
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} /> )}
            </div>
        </div>
    )
}

export default Home