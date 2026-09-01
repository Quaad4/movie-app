
import MovieCard from "../components/MovieCard"
import { useState } from "react"
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, img_url: "https://example.com/poster1.jpg", title: "Example Movie 1", release_date: "2023-01-01" },
        { id: 2, img_url: "https://example.com/poster2.jpg", title: "Example Movie 2", release_date: "2023-02-01" }
    ]

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