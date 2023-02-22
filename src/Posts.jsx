import Post from "./Post";
import "./App.css"
import { motion } from "framer-motion";

const Posts = ({posts, words}) => {
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
        <motion.div className="posts_holder">
            {posts.map((post, index) => {   
                if (post.text == null || !filter(post.text)) return;

                return (
                    <Post
                        key={index}
                        text={post.text}>
                    </Post>
                );
            })}
        </motion.div>
     );
}
 
export default Posts;