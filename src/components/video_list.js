//this component has no need for state and doesn't record user interaction or re-render itself
 // it can therefore be a functional component.

 import React from 'react';
 import VideoListItem from './video_list_item';

 const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        return <VideoListItem video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
 };

 export default VideoList;

