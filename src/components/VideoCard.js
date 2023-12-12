import React from "react";

const formatViewsCount = (count) => {
  if (count < 1000) {
    return count;
  } else if (count < 1000000) {
    const formattedCount = (count / 1000).toFixed(1);
    return formattedCount.endsWith(".0")
      ? formattedCount.slice(0, -2) + "k"
      : formattedCount + "k";
  } else {
    const formattedCount = (count / 1000000).toFixed(1);
    return formattedCount.endsWith(".0")
      ? formattedCount.slice(0, -2) + "M"
      : formattedCount + "M";
  }
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2  w-[17rem] shadow-lg cursor-pointer">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="thumbnail" />
      <ul>
        <li className="font-bold truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViewsCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
