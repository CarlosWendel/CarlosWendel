import React from 'react';
import Layout from './Layout';
import { createRoot } from 'react-dom/client';
import Alunos from './Alunos';
import Fichas from './Fichas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const app =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route Path='/' element={<Layout />}>
                    <Route Path='Alunos' element={Alunos}></Route>
                    <Route Path = 'Fichas' element ={Fichas}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const root=  createRoot(document.querySelector("#root"));
root.render(<app/>);
