import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video, idx) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                idx={idx}
                key={video.id.videoId}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;