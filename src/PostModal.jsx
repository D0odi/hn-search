import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

const PostModal = ({selectedPostId, posts, isLocked}) => {

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

    const isVisible = (id) => {
        return (id === null) ? false : true
     }

    return (
        <AnimatePresence>
            {(isVisible(selectedPostId) && (
            <motion.div 
            key={selectedPostId}
            initial={{ x: 600, y: -150, opacity: 0, scale: 0, height: '20rem', width: '35rem' }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1, height: isLocked ? '20rem' : '25rem' }}
            exit={{ x: -600, y: 150, opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            className='post_modal'>
                <AnimatePresence>
                    <motion.div
                    className='selected_post'>
                        <motion.div className='modal_by'>
                            <motion.h1 >{posts[selectedPostId].by}</motion.h1>
                            <motion.h1 >{convertTime(posts[selectedPostId].time)}</motion.h1>
                        </motion.div>
                        <motion.p1 className='modal_text'>{cleanAndDecodeHTML(posts[selectedPostId].text)}</motion.p1>
                    </motion.div>
                </AnimatePresence>
            </motion.div>))}
        </AnimatePresence>
     );
}
 
export default PostModal;