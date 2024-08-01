import React from 'react';
import ImageSearch from './imageSearch';

const NavigationBar = () => {

    return (
        <nav className="navigation-bar">
            <div className="logo">Image Gallery</div>
            <ImageSearch />
            <ul className="nav-links">
                <li><a href="/explore">Explore</a></li>
                <li><a href="/collection">Collection</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/profile"><span className="profile-icon"></span></a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
