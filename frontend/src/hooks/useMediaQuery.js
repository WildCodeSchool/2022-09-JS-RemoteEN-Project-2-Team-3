import { useEffect, useRef, useState } from "react";

const useMediaQuery = ({ minWidth, maxWidth }) => {
  const mediaQuery = "screen".concat(
    minWidth !== undefined ? ` and (min-width: ${minWidth})` : "",
    maxWidth !== undefined ? ` and (max-width: ${maxWidth})` : ""
  );

  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  const listenerAdded = useRef(false);

  useEffect(() => {
    if (listenerAdded.current) return;
    window
      .matchMedia(mediaQuery)
      .addEventListener("change", (e) => setMatches(e.matches));
    listenerAdded.current = true;
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
