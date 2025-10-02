import React from "react";

/**
 * Reusable Image component with lazy loading and fallback handling.
 *
 * Props:
 * - src: image source URL
 * - alt: alt text
 * - className: Tailwind or custom classes
 * - fallback: optional fallback URL if image fails
 * - rest: any other <img> attributes (width, height, style, etc.)
 */
const Image = ({ src, alt = "", className = "", fallback = "", ...rest }) => {
  const handleError = (e) => {
    if (fallback) {
      e.target.src = fallback;
    } else {
      e.target.style.display = "none"; // Hide if no fallback
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
      {...rest}
    />
  );
};

export default Image;
