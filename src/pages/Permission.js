import React, { useEffect, useCallback, useState } from "react";
import AgeCalculator from "../components/calc_age";

export default function Permission() {
  const [visited, setVisited] = useLocalStorage(false);

  const navigateAway = useCallback(() => {
    setVisited(true);
  }, [setVisited]);

  useEffect(() => {
    // if user navigates away to a completely different site
    // or refreshes the page etc
    window.addEventListener("beforeunload", navigateAway);

    // if user navigates to another page on the same site
    return () => {
      navigateAway();
      window.removeEventListener("beforeunload", navigateAway);
    };
  }, [navigateAway]);

   //localStorage.clear();
  return (
    <div className="w-full h-screen">
      <dialog open={!visited} className="mt-[200px]">
        <p>Welcome to page!</p>
        <button onClick={() => setVisited(true)}>
          Don't show again on this page
        </button>
      </dialog>
    </div>
  );
}

function useLocalStorage(key, initialDefault) {
  const [val, setVal] = useState(() => {
    const localStorageVal = localStorage.getItem(key);

    return localStorageVal !== null
      ? JSON.parse(localStorageVal)
      : initialDefault;
  });

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      setVal(initialDefault);
    }
  }, [key, initialDefault]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
}
