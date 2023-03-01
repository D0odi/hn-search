import Post from "./Post";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./App.css"
import { motion } from "framer-motion";

const Posts = ({posts, words, postDisplay, selected, isLoading}) => {

    const getRandom = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className="posts_holder">
            {isLoading && Array(40)
                .fill(0)    
                .map((i) => <div className="post_skeleton" style={{ width: `${getRandom(27)}vw` }}>
                                <Skeleton 
                                 baseColor="rgb(235,235,228)"
                                 duration={1.4}
                                 highlightColor={"white"}
                                 height={"5.5vh"}/>
                            </div>
                )
            }
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
    </div>
    );
}
 
export default Posts;