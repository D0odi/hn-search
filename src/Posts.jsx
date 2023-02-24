import Post from "./Post";
import "./App.css"
import { motion } from "framer-motion";

const Posts = ({posts, words, postDisplay, selected}) => {

    return (
        <motion.div className="posts_holder">
            {posts.map((post, index) => {   
                if (post.text == null) return;
                return (
                    <motion.div onClick={() => postDisplay(index)}>
                         <Post
                            selected={selected}
                            words={words}
                            index={index}
                            text={post.text}
                            postDisplay={postDisplay}>
                        </Post>
                    </motion.div>
                );
            })}
    </motion.div>
    );
}
 
export default Posts;