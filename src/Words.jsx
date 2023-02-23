import { useState } from 'react';
import './App.css'
import App from './App';
import {motion, AnimatePresence} from 'framer-motion';

const Words = ({ words, removeWord }) => {
  if (words.length === 0) return null;

  return (
      <motion.div layout className="filters_holder">
          {words.map((word, index) => (
              <motion.div
                layout
                initial={{ opacity: 0.5, x: -190, y: -150}}
                animate={{ opacity: 1, x: 0, y: 0}}
                whileHover={{ scale: 1.1, cursor: "pointer", boxShadow: "0 0 10px rgb(255, 102, 0)"}}
                onClick={() => removeWord(index)}
                className="word_container"
              >
                {word}
              </motion.div>
          ))}
      </motion.div>
  );
};

 
export default Words;