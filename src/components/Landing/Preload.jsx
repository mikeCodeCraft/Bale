import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';

const Preload = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1200); // 1.2s for a quick, modern feel
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="Bale Logo" className="h-12 w-auto animate-pulse" />
      </div>
    </div>
  );
};

export default Preload;
