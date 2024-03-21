import React from 'react';
import './FadeOverlay.css';

interface FadeOverlayProps {
  show: boolean;
}

const FadeOverlay: React.FC<FadeOverlayProps> = ({ show }) => {
  return <div className={`fade-overlay ${show ? 'show' : ''}`}></div>;
};

export default FadeOverlay;