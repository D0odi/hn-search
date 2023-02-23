import Post from "./Post";
import "./App.css"
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Posts = ({posts, words, postDisplay, isLocked}) => {

    const filter = (text) => {
        if (text == null || text == '') return false;
        for (let i = 0; i < words.length; i++) {
            if (!text.includes(words[i])) {
              return false;
            }
        }
        return true;
    }

    return (
        <motion.div className="posts_holder">
                {posts.map((post, index) => {   
                    if (post.text == null || !filter(post.text)) return;
                    return (
                        <motion.div onClick={() => postDisplay(index)}>
                            <Post
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