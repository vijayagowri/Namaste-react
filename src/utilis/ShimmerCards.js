import React from "react";

ShimmerCards = () => {
  return (
    <div className="restro-shimmer-container" >
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div className="resto-card" key={i} style={{height:'260px'}}></div>
        ))}
    </div>
  );
};

export default ShimmerCards;
