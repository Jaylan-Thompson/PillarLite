import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LoadingAnimation() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Preload the Lottie JSON animation
        fetch('/images/Pillar Loading.json')
            .then(response => response.json())
            .then(data => {
                // Initialize Lottie animation after preloading the JSON
                const animation = lottie.loadAnimation({
                    container: containerRef.current,
                    renderer: 'canvas',
                    loop: true,
                    autoplay: true,
                    animationData: data 
                });

                return () => animation.destroy();
            });
    }, []);

  return <div ref={containerRef} style={{ width: '100%' }}>
  </div>;
}

export default LoadingAnimation;
