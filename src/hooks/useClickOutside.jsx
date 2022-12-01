import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.getElementById("root").addEventListener("click", handleClick);
    return () => {
      document.getElementById("root").removeEventListener("click", handleClick);
    };
  });
};
