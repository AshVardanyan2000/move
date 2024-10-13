import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScreen = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleScreen);

    handleScreen();

    return () => window.removeEventListener('resize', handleScreen);
  }, []);

  return {windowWidth, windowHeight };
};

export default useWindowSize;
