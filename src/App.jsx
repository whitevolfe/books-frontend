/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const BACKEND_URL = "https://bookstore-backend-rho.vercel.app/";

// eslint-disable-next-line react-refresh/only-export-components
export const fetchBooks = async () => {
    const response = await fetch(`${BACKEND_URL}/books`);
    const data = await response.json();
    return data;
};

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </div>
  )
}

export default App