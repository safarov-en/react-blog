import BgSinglePost from "../../img/bg-single-post.jpg";
import "./single-post.css";

export default function SinglePost() {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img className="single-post-img" src={BgSinglePost} alt="" />
                <h1 className="single-post-title">
                    Lorem ipsum dolor sit amet.
                    <div className="single-post-edit">
                        <i className="single-post-icon fa-regular fa-pen-to-square"></i>
                        <i className="single-post-icon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">Author: <b>Author</b></span>
                    <span className="single-post-date">1 hour ago</span>
                </div>
                <p className="single-post-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora distinctio asperiores ratione debitis assumenda animi quia iure corporis dolorum eius? Illum sequi iusto voluptatum ea asperiores esse, aperiam cum beatae!
                </p>
            </div>
        </div>
    )
}
