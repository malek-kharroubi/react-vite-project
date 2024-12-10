import React from "react";

export default function Navbar({ numbreLike }) {
  return (
    <div className="entete">
      <h3>Les posts liker sont: {numbreLike}</h3>
    </div>
  );
}
