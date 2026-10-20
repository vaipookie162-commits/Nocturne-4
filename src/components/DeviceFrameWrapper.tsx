import React from 'react';

interface DeviceFrameWrapperProps {
  children: React.ReactNode;
  songTitle?: string;
  artistName?: string;
}

/** Full-screen app wrapper. No nested phone mockup or demo chrome. */
export const DeviceFrameWrapper: React.FC<DeviceFrameWrapperProps> = ({ children }) => {
  return (
    <div className="relative h-[100dvh] min-h-0 w-full overflow-hidden bg-slate-950 text-white font-sans flex flex-col">
      {children}
    </div>
  );
};
