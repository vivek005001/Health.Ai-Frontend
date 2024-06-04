// components/AnimationComponent.jsx
'use client'; // This tells Next.js to render this component on the client-side

import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const AnimationComponent = () => {
  const container = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Dynamically import the animation data
    import('@/assets/animations/hello.json').then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  useEffect(() => {
    if (animationData) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData,
      });
    }
  }, [animationData]);

  return <div className="h-96 w-96" ref={container}></div>;
};

export default AnimationComponent;