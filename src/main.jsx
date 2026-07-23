import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import App from './App.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'
import Favorites from './Pages/Favorites.jsx'
import Home from './Pages/Home.jsx'
import SearchResults from './Pages/SearchResults.jsx'
import Layout from './Layout.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Layout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path= '/favorites' element={<Favorites/>}></Route>
    <Route path='/search' element={<SearchResults/>}></Route>
    <Route path='movie/:movieId' element={<MovieDetails/>}></Route>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
