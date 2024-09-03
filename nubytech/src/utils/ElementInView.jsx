import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useElementInView = (querySelector) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    console.log("view");
    const elements = document.querySelectorAll(querySelector);
    elements.forEach((element) => {
      if (inView) {
        element.classList.add("in-view");
      } else {
        element.classList.remove("in-view");
      }
    });
  }, [inView, querySelector]);

  return { ref, inView };
};

export default useElementInView;
