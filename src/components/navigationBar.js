import React from 'react';
import {Moon, Sun, User} from 'lucide-react';
import ImageSearch from './imageSearch';

const NavigationBar = ({ onSearch, darkMode, setDarkMode }) => {
    const handleToggle = () => {
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navigation-bar">
            <div className="logo">Image Gallery</div>
            <ImageSearch onSearch={onSearch} />
            <ul className="nav-links">
                <li><a href="/collection">Collection</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/profile"><User /></a></li>
                <li onClick={handleToggle} style={{ cursor: 'pointer' }}>
                    {darkMode ? <Sun /> : <Moon />}
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
