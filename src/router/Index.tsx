import { CreatePokemon } from '../components/Pokemon/CreatePokemon';
import { Home } from '../components/Pokemon/Home'

import { Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePokemon />} />
        </Routes>
    )
}