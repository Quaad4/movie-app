import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{ url: 'https://example.com/poster.jpg', title: 'Example Movie', release_date: '2023-01-01' }} />
    </>
  )
}

export default App
