import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

const PostModal = ({selectedPostId, posts, setselectedPostId}) => {
    if (selectedPostId == null || posts[selectedPostId] == null) return;

    const cleanAndDecodeHTML = (text) => {
        const element = document.createElement('div');
        element.innerHTML = text;
        return element.textContent;
    }
    const convertTime = (time) => {
        const date = new Date(time * 1000);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <motion.div className='post_modal'>
          <AnimatePresence>
             {selectedPostId && (
                <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.3 }}
                className='selected_post'>
                    <motion.div  className='modal_by'>
                        <motion.h1 >{posts[selectedPostId].by}</motion.h1>
                        <motion.h1 >{convertTime(posts[selectedPostId].time)}</motion.h1>
                    </motion.div>
                    <motion.p1 className='modal_text'>{cleanAndDecodeHTML(posts[selectedPostId].text)}</motion.p1>
                </motion.div>
                )}
          </AnimatePresence>
        </motion.div>
     );
}
 
export default PostModal;