
import './App.css'
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar";


function App() {


  return (
      <>
          <div>
              <Navbar></Navbar>
          </div>
         <main className="main-content">
             <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/favorite" element={<Favorite />} />

             </Routes>

         </main>


      </>

  )
}



export default App
