import { Link } from 'react-router-dom'

import './style.css'

export const Header = () => {
    return (
        <header className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </nav>
        </header>
    )
}