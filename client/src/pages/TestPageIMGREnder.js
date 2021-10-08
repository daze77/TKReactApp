import React, { useState, useRef } from 'react';
import { useIntersection } from '../components/LazyLoadImages/IntersectionObserver';
import './TestPage.css';

function TestPageIMGREnder (props){ 
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <div
      className="image-container"
      ref={imgRef}
      style={{
        paddingBottom: `${(props.height / props.width) * 100}%`,
        width: '100%'
      }}
    >
      {isInView && (

          <img
            className='image'
            src={props.url}
            alt={props.url}
          />

      )}
    </div>
  );
};

export default TestPageIMGREnder;