import Bg from '../img/bg.jpg';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm">React & Node</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img src={Bg} alt="" className="header-img" />
        </div>
    )
}
