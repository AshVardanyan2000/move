import { useEffect, useState } from 'react';

const useWindowSize = (mobileMaxWidth = 767) => {
  const [isMobile, isMobileToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScreen = () => {
      isMobileToggle(window.innerWidth <= mobileMaxWidth);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight)
    };

    window.addEventListener('resize', handleScreen);

    handleScreen();

    return () => window.removeEventListener('resize', handleScreen);
  }, []);

  return {windowWidth, windowHeight,isMobile };
};

export default useWindowSize;
