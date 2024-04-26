import { Link } from "react-router-dom";
import Profile from '../../img/profile.jpg';
import './topbar.css';

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="top-left">
                <i className="top-icon fa-brands fa-vk"></i>
                <i className="top-icon fa-brands fa-square-twitter"></i>
                <i className="top-icon fa-brands fa-square-pinterest"></i>
                <i className="top-icon fa-brands fa-square-instagram"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item"><Link className="link" to="/">HOME</Link></li>
                    <li className="top-list-item"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="top-list-item"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="top-list-item"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="top-list-item">
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {
                    user ? 
                        ( <img className="top-img" src={Profile} alt="" />) :
                        (
                            <ul className="top-list">
                                <li className="top-list-item">
                                    <Link className="link" to="/login">LOGIN</Link>
                                </li>
                                <li className="top-list-item">
                                    <Link className="link" to="/register">REGISTER</Link>
                                </li>
                            </ul>
                        )
                }
                <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}