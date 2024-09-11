import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'; // Ensure that 'meal' points to a valid video path or import
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef(null);

  const handleVideo = () => {
    if (vidRef.current) { // Ensure vidRef is not null
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setPlayVideo(!playVideo);
    }
  };

  return (
    <div className='app__video'>
      <video
        ref={vidRef}
        src={meal} // Make sure this points to the correct path to the video
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div 
          className='app__video-overlay_circle flex__center' 
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
