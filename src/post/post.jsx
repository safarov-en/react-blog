import PostBg from '../img/post-bg-one.jpg';
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img src={PostBg} alt="" className="post-img" />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus possimus fugiat. Magnam perferendis quae culpa dicta corrupti rem laboriosam! Blanditiis quia tempora ea dolore, maxime esse doloribus obcaecati quam!
            </p>
        </div>
    )
}
