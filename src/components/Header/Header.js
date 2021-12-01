import { Link } from 'react-dom';

const Header = () => {
return(
    <header>
        <h2><a className="home" href='/home'>DeliSHesss</a></h2>
        <nav>
            <ul class="navigation">
                <div id='user'>
                    <li><a href='/add'>Add NEW</a></li>
                    <li><a href='/logout'>Logout</a></li>
                </div>
                <div id='guest'>
                    <li><a href='/register'>Register</a></li>
                    <li><a href='/login'>Login</a></li>
                </div>
            </ul>
        </nav>
    </header>
);

}

export default Header;