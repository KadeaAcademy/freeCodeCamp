import React from 'react';
import './video-player.css';
import ReactPlayer from 'react-player/file';
// import { Spacer } from '../helpers';

export function VideoPlayer(props: { videoLink: string }): JSX.Element {
  const [selectedVideo, setSelectedVideo] = React.useState(props.videoLink);

  React.useEffect(() => {
    setSelectedVideo(props.videoLink);
  }, [props.videoLink]);

  return (
    <>
      <div className='video-player-content'>
        <ReactPlayer
          className='bg-warning video-player'
          width='100%'
          height='100%'
          controls={true}
          url={selectedVideo}
        />
      </div>
      {/* <br /> */}
      <div>
        <h2 className='h4'>
          Twice the qualified leads at a quarter of the cost
        </h2>
      </div>
    </>
  );
}

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
