import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();
    let userNavigation = (
        <div id='user'>
            <span>Welcome, <b>{user.email}</b> </span>
            <li className='nav-li'><a href='/my-recepts'>My recepts</a></li>
            <li className='nav-li'><a href='/addRecepts'>Add NEW recept</a></li>
            <li className='nav-li'><a href='/logout'>Logout</a></li>
        </div>
    );

    let guestNavigation = (
            <div id='guest'>
                <li className='nav-li'><a href='/register'>Register</a></li>
                <li className='nav-li'><a href='/login'>Login</a></li>
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