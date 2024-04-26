import Sidebar from '../../components/sidebar/sidebar';
import Profile from '../../img/profile.jpg';
import './settings.css';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update Your Account</span>
                    <span className="settings-delete-title">Delete Account</span>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-pp">
                        <img src={Profile} alt="" />
                        <label htmlFor="file-input">
                            <i className="settings-pp-icon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="file-input" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="text" />
                    <label>Email</label>
                    <input type="email" placeholder="email@mail.ru" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}