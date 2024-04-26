import PostOne from '../../img/post-1.jpg';
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img className="sidebar-img" src={PostOne} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minus quia quos praesentium, voluptate sunt eos consequatur dignissimos dolore, expedita, aspernatur nesciunt culpa numquam illo laboriosam eveniet adipisci repudiandae? Et.</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Style</li>
                    <li className="sidebar-list-item">Sport</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-social">
                    <i className="sidebar-icon fa-brands fa-vk"></i>
                    <i className="sidebar-icon fa-brands fa-square-twitter"></i>
                    <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                    <i className="sidebar-icon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
