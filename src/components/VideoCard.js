import React from "react";
import { useSelector } from "react-redux";

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

  const toggleBar = useSelector((store) => store.sidebar.isVisible);
  const defualtImg = thumbnails?.maxres?.url ?? thumbnails?.medium?.url;
  const imageSrc = toggleBar ? defualtImg : thumbnails?.medium?.url;
  return (
    <div
      className={`m-2 cursor-pointer bg-transparent ${
        toggleBar ? "w-[400px] " : "w-80"
      }`}
    >
      {imageSrc && (
        // <img
        //   src={imageSrc}
        //   className="rounded-xl w-[400px] h-[225px]"
        //   alt="thumbnail"
        // />
        <img
          src={imageSrc}
          className={`rounded-xl ${toggleBar ? "w-[400px] " : ""}`}
          alt="thumbnail"
        />
      )}
      <ul>
        <li className="font-bold truncate">{title}</li>
        <li className="font-medium text-gray-700">{channelTitle}</li>
        <li>{formatViewsCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
