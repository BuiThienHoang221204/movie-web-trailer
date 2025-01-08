import {useState, useEffect} from 'react'
import './App.css'
import Header  from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import { MovieProvider } from './context/MovieProvider'

function App() {
  const [movies, setMovies] = useState([])
  const [moviesRate, setMoviesRate] = useState([])
  const [moviesSearch, setMoviesSearch] = useState([])

  const handleSearch = async (search) => {
    setMoviesSearch([]);
    try{
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const movieSearch = await fetch(url, options);
      const data = await movieSearch.json();
      setMoviesSearch(data.results);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ])
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovies(data1.results);
      setMoviesRate(data2.results);
     
    }
    fetchMovies();
  }, [])
  return (
    <>
      <MovieProvider>
        <div className='h-full bg-black text-white min-h-screen pb-10 relative'>
          <Header onSearch={handleSearch}/>
          <Banner/>
          {moviesSearch.length > 0 ? (<MovieSearch title = {"Kết Quả Tìm Kiếm"} data={moviesSearch}/>) :(
            <>
            <MovieList title = {"Phim Hot"} data={movies}/>
            <MovieList title={"Phim Đề Cử"} data={moviesRate}/>
            </>
          )}
          
        </div>
      </MovieProvider>
    </>
  )
}

export default App
