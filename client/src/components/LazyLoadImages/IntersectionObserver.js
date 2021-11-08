import {useEffect} from 'react'

// passFunction herer just represents the setIsInView that is being passed when we useCreateObserver in the Gallery Card
export function useCreateObserver(imgRef, passFunction ){

  useEffect(() => {
    let observer
  
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }

    observer = new IntersectionObserver(callback, options); 
    observer.observe(imgRef.current);

  },[])

  function callback(entries, observer){
    entries.forEach((entry) => {
      if(entry.intersectionRatio > 0){
        console.log('[we see it]', entries[0].target.outerText )
        // wer run the function here so that the picture setIsInView is changed to true each time the imgRef we used comes into view
        passFunction()
      
      }

    })
  }
}