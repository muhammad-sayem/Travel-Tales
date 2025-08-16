"use client";

import { useEffect } from "react";
import { helix } from "ldrs";

const Loader = () => {
  useEffect(() => {
    helix.register(); 
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <l-helix size="45" speed="2.5" color="black"></l-helix>
    </div>
  );
};

export default Loader;
