import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoName = video.snippet.title;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoName}</div> 
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;