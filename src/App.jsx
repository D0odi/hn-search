import { useEffect, useState } from 'react'
import './App.css'
import Words from './Words.jsx'
import { motion, AnimatePresence, easeInOut} from 'framer-motion'
import { FaPlus, FaLockOpen, FaLock } from "react-icons/fa";
import Posts from './Posts'; 

function App() {
  const [words, setWords] = useState([])
  const [posts, setPosts] = useState([])
  const [link, setLink] = useState("");
  const [comments, setComments] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(data => {
        setComments(data.kids)
      })
  }, [link])


  useEffect(() => {
    const promises = comments.map(comment_id => fetch(`https://hacker-news.firebaseio.com/v0/item/${comment_id}.json?print=pretty`)
      .then(response => response.json()));
    Promise.all(promises)
      .then(data => {
      setPosts(data);
    });
  }, [comments, words]);
  
  


  const [isLocked, setIsLocked] = useState(false);
  const toggleLock = () => {
    if (!isLocked) {
      const linkInput = document.querySelector('.link_input');
      setLink(linkInput.value);
    }
    setIsLocked(!isLocked);
  }

  const addWord = () => {
    const wordInput = document.querySelector('.words_input');
    if (wordInput.value === "") return;
    const newWord = wordInput.value;
    setWords([...words, newWord]);
    wordInput.value = "";
  }

  const removeWord = (index) => {
    const newWords = [...words]
    newWords.splice(index, 1)
    setWords(newWords)
  }

  const postDisplay = (id) => {
    setSelectedPost(id)
  }

  return (
    <div className="App">
      <div className="wrapper_left">
        <input type="text" className="words_input" placeholder='filter words...' maxLength={25} />
        <motion.button
          className='addWord' onClick={addWord}>
          <motion.div 
            whileHover={{ scale: 1.3, cursor: "pointer"}} 
            whileTap={{
              scale: 1,
              rotate: -20}}>
            <FaPlus color='rgb(255, 102, 0)' size='30px' />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          <Words words={words} removeWord={removeWord}></Words>
        </AnimatePresence>
      </div>
      <div className="wrapper_right">
        <motion.input type="text" 
          className="link_input" placeholder='HN story link...' disabled={isLocked}
          initial={{position: 'absolute', left: '112.4rem'}}
          transition={{type: "tween", duration: 2.5, ease: easeInOut}}
          animate={{
            width: isLocked ? '0rem' : '67.5rem',
            left: isLocked ? '65.95rem' : '0rem',
            opacity: isLocked ? 0 : 1,
          }}/>
        <motion.button
          className='linkLock' onClick={toggleLock}>
          <motion.div 
            whileHover={{ scale: 1.3, cursor: "pointer" }} 
            whileTap={{
              rotate: -10}}>
            {isLocked ? <FaLock color='rgb(255, 102, 0)' size='30px' /> 
                 :      <FaLockOpen color='rgb(255, 102, 0)' size='30px' />}
          </motion.div>
        </motion.button>
        <motion.div animate={{y: isLocked ? "-4.5rem" : "0rem"
                              }} transition={{duration: 2}}>
          <Posts posts={posts} words={words} postDisplay={postDisplay} isLocked={isLocked}></Posts>
        </motion.div>
      </div>
    </div>
  )
}

export default App;
