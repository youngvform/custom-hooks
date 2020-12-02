import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize');
    };
  }, []);
  return width;
}

export default useWindowWidth;
