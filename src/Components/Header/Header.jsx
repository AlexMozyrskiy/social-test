import { NavLink } from 'react-router-dom';
import logo from './../../img/logo/logo.svg';

const Header = (props) => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div>{ props.isLoggedIn ? props.login : <NavLink to="/login">LogIn</NavLink> }</div>
            <span onClick={ props.headerIsLogoutThunkCreator }>{ props.isLoggedIn && "Log Out" }</span>
        </div>
    );
}

export default Header;