import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}        
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      />
    </div>
  )
}

export default Video
