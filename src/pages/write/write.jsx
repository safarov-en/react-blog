import BgWrite from '../../img/bg-single-post.jpg';
import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img className="write-img" src={BgWrite} alt="" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <i className="write-icon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="file-input" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Tell your story..." type="text" className="write-input write-text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}
