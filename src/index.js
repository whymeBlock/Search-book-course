import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import './index.css';
import {AppProvider} from "./context";

import Home from './pages/home/Home'
import About from './pages/about/About'
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='about' element={<About/>}/>
                    <Route path='book' element={<BookList/>}/>
                    <Route path='/book/:id' element={<BookDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
);
