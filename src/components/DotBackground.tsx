import React, { ReactNode } from "react";

interface DotBackgroundProps {
  children?: ReactNode;
}

const DotBackground: React.FC<DotBackgroundProps> = ({ children }) => {
  return (
    <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex  w-full items-center justify-center bg-white dark:bg-black">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
    </div>
  );
};

export default DotBackground;
