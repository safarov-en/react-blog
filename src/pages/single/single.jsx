import Sidebar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/single-post/single-post';
import './single.css';

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
