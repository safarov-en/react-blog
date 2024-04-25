import Profile from '../img/profile.jpg';
import './topbar.css';

export default function TopBar() {
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
                    <li className="top-list-item">HOME</li>
                    <li className="top-list-item">ABOUT</li>
                    <li className="top-list-item">CONTACT</li>
                    <li className="top-list-item">WRITE</li>
                    <li className="top-list-item">LOGOUT</li>
                </ul>
            </div>
            <div className="top-right">
                <img className="top-img" src={Profile} alt="" />
                <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}