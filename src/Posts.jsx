import Post from "./Post";
import "./App.css"
import { motion, AnimatePresence } from "framer-motion";

const Posts = ({posts, words, postDisplay}) => {
    if (posts.length == 0) return;

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
        <motion.div layout className="posts_holder">
                {posts.map((post, index) => {   
                    if (post.text == null || !filter(post.text)) return;
                    return (
                        <motion.div layout>
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