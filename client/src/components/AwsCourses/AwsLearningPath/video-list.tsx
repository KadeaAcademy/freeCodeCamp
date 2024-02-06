/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './video-list.css';
import datas from './video-data.json';

type VideoProps = {
  id: number;
  videoTitle: string;
  videoTime: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedVideo: (params: any) => void;
};

export function VideoList(props: VideoProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectVideo = (item: any) => {
    props.setSelectedVideo(item);
  };
  return (
    <>
      <div className='video-list-container bg-secondary'>
        <ul>
          {datas.videos.map(data => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className='video-item'
              key={data.id}
              onClick={() => selectVideo(data)}
            >
              <h4>{data.videoTitle}</h4>
              <p>{data.videoTime}</p>
              <div>Plus d&apos;infos</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

VideoList.displayName = 'VideoList';

export default VideoList;
