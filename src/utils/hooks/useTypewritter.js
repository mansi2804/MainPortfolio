import  { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, delay=0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = () =>{
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++;
      } else {
        clearInterval(intervalTyping);
      }
    }

    const intervalTyping = ()=>{
        setInterval(typingInterval,speed);
    }
    if(delay!==0){
        setTimeout(intervalTyping, delay)
    } else {
        intervalTyping()
    }
    return () => {
      clearInterval(intervalTyping);
    };
  }, [text, speed, delay]);

  return displayText;
};

export default useTypewriter;