import { useState, useEffect } from 'react';

const useKeyCode = (event: 'keyup' | 'keypress' | 'keydown') => {
  const [keyCode, setKeyCode] = useState();
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const onKeyEvent = ({ keyCode }: any) => {
      setKeyCode(keyCode);
      setKeyPressed(prevState => !prevState);
    };

    document.addEventListener(event, onKeyEvent);

    return () => document.removeEventListener(event, onKeyEvent);
  }, []);

  return [keyCode, keyPressed];
};

export default useKeyCode;