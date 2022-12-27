import './App.css';
import { getPopularMovies, searchMovies } from './api';
import { useEffect, useState } from 'react';
import Card from './component/Card';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((result) => {
      setPopularMovies(result);
    });

    return () => {

    }
  }, []);

  const search = async (q) => {
    if (q.length > 3) { 
      const query = await searchMovies(q);
      setPopularMovies(query.results);
    }
  }

  return (
    <div className="min-w-sm flex flex-col bg-gray-900">
      <header className="bg-black mb-8 mx-auto items-center w-[100%] flex flex-col">
        <h1 className="text-white text-3xl mt-10">Movie App</h1>
        <input type="text"
          placeholder='Search title ....' 
          className="shadow appearance-none border text-sm my-10 rounded w-[50%] h-10 p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={({target}) => search(target.value)} />
      </header>
      <main>
        <div className="container flex flex-wrap mx-auto gap-y-9 gap-x-3 grid-cols-4 pb-10">
          {popularMovies.map((movies, i) => {
            return(
              <Card 
                key={i}
                poster={movies.poster_path}
                title={movies.title}
                release={movies.release_date}
                vote={movies.vote_average}
              />
            )
          })}
        </div>
      </main>
      <footer className="bg-black h-[300px] w-full">
        <div className="text-3xl text-center text-white mt-[30px]">Movie App</div>
      </footer>
    </div>
  );
}

export default App;
