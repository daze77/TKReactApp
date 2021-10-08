import {useEffect} from 'react'

  let listenerCallbacks = new WeakMap();

  let observer;
  
  function handleIntersections(entries) {
    entries.forEach(entry => {
      if (listenerCallbacks.has(entry.target)) {
        let cb = listenerCallbacks.get(entry.target);
  
        if (entry.isIntersecting || entry.intersectionRatio > 0.75) {
          observer.unobserve(entry.target);
          listenerCallbacks.delete(entry.target);
          cb();
        }
      }
    });
  }
  
  function getIntersectionObserver() {
    if (observer === undefined) {
      observer = new IntersectionObserver(handleIntersections, {
        root: null,
        rootMargin: '0px',
        threshold: '1.0',
      });
    }
    return observer;
  }

  export function useIntersection(elem, callback) {
    useEffect(() => {
      let target = elem.current;
      console.log('[[this is target]]', target)
      let observer = getIntersectionObserver();
      listenerCallbacks.set(target, callback);
      observer.observe(target);
  
      // return () => {
      //   listenerCallbacks.delete(target);
      //   observer.unobserve(target);
      // };
    }, []);
  }





