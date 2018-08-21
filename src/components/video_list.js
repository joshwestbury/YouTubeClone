//this component has no need for state and doesn't record user interaction or re-render itself
 // it can therefore be a functional component.

 import React from 'react';

 const VideoList = (props) => {
     return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
     );
 };

 export default VideoList;

