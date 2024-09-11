import { useState } from 'react';
import './App.css';
import ListFilm from './Components/ListFilm';
import NavFilms from './Components/NavFilms';
import AddFilm from './Components/AddFilm';
import SearchFilm from './Components/SearchFilm';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import FilmPage from './Components/FilmPage';

function App() {
  const [movies,setMovies]= useState ([
    {   title : "The expandables", 
        description : "A group of mercenaries is double-crossed during a mission and are approached by Church to overthrow the ruthless dictator of a South American country. It isn't long before the men realise things aren't quite as they appear, finding themselves caught in a dangerous web of betrayal. Although their mission is compromised and an innocent is in danger, soldier of fortune Barney and his comrades decide to get the job done.",
        posterURL : "https://m.media-amazon.com/images/I/81V3xQK-vhL._AC_UF894,1000_QL80_.jpg",
        rating : 3.5,
        id : Math.random(),
        trailer :<iframe width="560" height="315" src="https://www.youtube.com/embed/DhlaBO-SwVE?si=Scy2sEFzRCKucRWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        title : "Fast and Furious", 
        description : "Fast & Furious, also known as The Fast and the Furious, is a media franchise centered on a series of action films that are largely concerned with street racing, heists, spies, and family.",
        posterURL : "https://musicart.xboxlive.com/7/68c35100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        rating : 4 ,
        id : Math.random(),
        trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/_Di_PJyDGIg?si=E92_vLtElrXq7Vuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
        title : "The transporter", 
        description : "Ex-Special Forces operator Frank Martin (Jason Statham) lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods - human or otherwise - from one place to another. No questions asked. Dangerous complications ensue when he is hired to kidnap the feisty daughter of a lethal Chinese crime lord who's smuggling his fellow countrymen into France.",
        posterURL : "https://lumiere-a.akamaihd.net/v1/images/transporter1_584x800_49cfdd27.jpeg?region=0%2C0%2C584%2C800",
        rating : 5,
        id : Math.random(),
        trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/_KFOYFBh2QM?si=7ZE--rVO_ptqUNBl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
])

  const [searchT,setSearchT]=useState('')
  const [rateT,setRateT]=useState(0)

  return (
    <div>
      <NavFilms/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<>
          <div className='searchAdd'>
            <SearchFilm searchT={searchT} setSearchT={setSearchT} rateT={rateT} setRateT={setRateT} />
            <AddFilm setMovies={setMovies} movies={movies}/>
          </div>
          <ListFilm movies={movies} searchT={searchT} rateT={rateT} />
        </>}/> 
        <Route path='/FilmPage/:id' element={<FilmPage movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
