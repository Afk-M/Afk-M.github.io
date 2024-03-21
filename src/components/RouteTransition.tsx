import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FadeOverlay from '../FadeOverlay';

const RouteTransition: React.FC = () => {
  const [fade, setFade] = useState<boolean>(false);
  const location = useLocation();
  const firstUpdate = useRef<boolean>(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    setFade(true);
    const timeout = setTimeout(() => setFade(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return <FadeOverlay show={fade} />;
};

export default RouteTransition;