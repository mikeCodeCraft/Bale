import React, { useEffect } from 'react';

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
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#BA3D0A] border-opacity-80"></div>
        <span className="text-xl font-bold tracking-widest animate-pulse">Loading Bale...</span>
      </div>
    </div>
  );
};

export default Preload;
