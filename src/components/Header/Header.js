import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    let userNavigation = (
        <div id='user'>
            <p>Welcome, {user.email} </p>
            <li><a href='/add'>Add NEW</a></li>
            <li><a href='/logout'>Logout</a></li>
        </div>
    );

    let guestNavigation = (
            <div id='guest'>
                <li><a href='/register'>Register</a></li>
                <li><a href='/login'>Login</a></li>
            </div>
    );

return(
    <header>
        <h2><a className="home" href='/home'>DeliSHesss</a></h2>
        <nav>
            <ul className="navigation">
                {user.email 
                    ? userNavigation 
                    : guestNavigation}
            </ul>
        </nav>
    </header>
);

}

export default Header;