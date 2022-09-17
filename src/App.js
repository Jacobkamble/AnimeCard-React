import './App.css';
import Box from './components/Box';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Filter from './components/Filter';
import DataState from './context/DataState';
import { useState } from 'react';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import MoreDetails from './components/MoreDetails';

function App() {
 const[search,setSearch]= useState("");

  return (
    <>
    <DataState>
    <Router>
        <Navbar setSearch={setSearch} search={search}/>
        <Routes>
          <Route exact path='/' element={<Box />}></Route>
          <Route exact path='action' element={<Filter key="action" filter="action" />}></Route>
          <Route exact path='adventure' element={<Filter key="adventure" filter="adventure" />}></Route>
          <Route exact path='sports' element={<Filter key="sports" filter="sports" />}></Route>
          <Route exact path='comedy' element={<Filter key="comedy" filter="comedy" />}></Route>
          <Route exact path='drama' element={<Filter key="drama" filter="drama" />}></Route>
          <Route exact path='avant' element={<Filter key="avant" filter="avant" />}></Route>
          <Route exact path='search' element={<Search search={search}/>} ></Route>
          <Route exact path='watchlist' element={<Watchlist/>}></Route>
          <Route exact path='more' element={<MoreDetails/>}  ></Route>
        </Routes>
      </Router>
    </DataState>
    </>

  );
}

export default App;
