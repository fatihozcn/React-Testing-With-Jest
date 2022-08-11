import React from 'react'
const Videos = ({ videos = [] }) => {
        if(videos.length<=0) {
        return <h2>Sorry, no videos found.</h2>;
    }
    return (
    <div>
        {videos.map((video, index)=>(
            <h4 key={index}>{video}</h4>
        ))}
    </div>
    )
}

export default Videos;
