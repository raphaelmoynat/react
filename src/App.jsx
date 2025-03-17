
import './App.css'
import MovieCard from "./components/MovieCard";

function App() {


  return (
      <>
        <MovieCard movie={{
            title: "Film 1",
            release_date: "2024"
        }} />
          <MovieCard movie={{
              title: "Film 2",
              release_date: "2023"
          }} />
      </>

  )
}



export default App
