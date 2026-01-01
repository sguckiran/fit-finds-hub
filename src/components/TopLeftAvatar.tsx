// filepath: /Users/sinan/Documents/GitHub/fit-finds-hub/src/components/TopLeftAvatar.tsx
import React from "react";
import ali from "@/assets/ali.png";

interface TopLeftAvatarProps {
  fixed?: boolean;
  className?: string;
  alt?: string;
}

const TopLeftAvatar: React.FC<TopLeftAvatarProps> = ({ fixed = true, className = "", alt = "Ali" }) => {
  const img = (
    <img
      src={ali}
      alt={alt}
      className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white/80 shadow-lg mx-auto md:mx-0 ${className}`}
    />
  );

  if (fixed) {
    // hide on small screens (mobile) with hidden md:block
    return <div className="hidden md:block fixed top-4 left-4 z-[9999]">{img}</div>;
  }

  // When not fixed (About section), center on mobile and left-align on md+
  return <div className="w-full flex justify-center md:justify-start">{img}</div>;
};

export default TopLeftAvatar;
