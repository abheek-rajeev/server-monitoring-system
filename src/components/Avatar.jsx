import React from "react";

const Avatar = ({ image, alt, size }) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <img src={image} alt={alt} style={{ width: size, height: size }}/>
    </div>
  );
};

export default Avatar;