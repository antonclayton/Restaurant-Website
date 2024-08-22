import React from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants';

import { useState, useEffect } from 'react'

import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
      setShowOverlay(false); //set overlay to false right after pressing play
    }

    
  }

  useEffect(() => {
    const handleMouseMove = () => { 
      setShowOverlay(true);

      // clearTimeout(mouseMoveTimeout); //clear the current mouseMoveTimeout; 
      // mouseMoveTimeout = setTimeout(() => setShowOverlay(false), 2000) //timeout is cleared on mousemove but needs to be restablished right after it stops; inactivity from user causes overlay to disappear until mouse move
    }

    // let mouseMoveTimeout = setTimeout(() => setShowOverlay(false), 2000); //first need to make mouseMoveTimeout

    const videoElement = vidRef.current;  
    videoElement.addEventListener('mousemove', handleMouseMove); //on mouse move call function above

    return () => {
      videoElement.removeEventListener('mousemove', handleMouseMove); //clean up for event listener
    }
  },[]);


  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {showOverlay && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {
              playVideo
                ? (<BsPauseFill color="#fff" fontSize={50} />)
                : (<BsFillPlayFill color="#fff" fontSize={50} />)
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default Intro
