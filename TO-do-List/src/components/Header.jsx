import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleSignIn = () => {
        setLoggedIn(true);
        setUsername('JohnDoe'); // Example username
    }

    return (
        <div className="header">
            <img src="TodoSvg.SVG" alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {loggedIn ? (
                        <li>{username}</li>
                    ) : (
                        <li><button onClick={handleSignIn}>Sign In</button></li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Header;