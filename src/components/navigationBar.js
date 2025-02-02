import React, {useState} from 'react';
import {Moon, Sun, Files, Users, User} from 'lucide-react';
import ImageSearch from './imageSearch';

const NavigationBar = ({ onSearch, darkMode, setDarkMode }) => {
    const [menuOption, setMenuOption] = useState(false);
    const toggleMenu = () => {
        setMenuOption(!menuOption);
    };
    const handleToggle = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <nav className="navigation-bar">
            <div className="logo">Image Gallery</div>
            <ImageSearch onSearch={onSearch} />
            <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
            <ul className={`nav-links ${menuOption ? 'show' : ''}`}>
                <li><a href="/collection"><Files/></a></li>
                <li><a href="/community"><Users/></a></li>
                <li><a href="/profile"><User /></a></li>
                <li onClick={handleToggle} style={{ cursor: 'pointer' }}>
                    {darkMode ? <Sun /> : <Moon />}
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
