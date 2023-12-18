import React, { useEffect, useState } from "react";
import { getVideos } from "../api";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";

const VideoContainer = () => {
  const [videoData, setVideodata] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVideos()
      .then((json) => {
        console.log(json);
        setLoading(false);
        setVideodata(json.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, []);

  const shimmerCardsArray = Array.from({ length: 15 });

  return loading ? (
    <div className="flex flex-wrap">
      {shimmerCardsArray.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap">
      {videoData && videoData.length > 0
        ? videoData.map((item) => (
            <Link to={"/watch?v=" + item.id} key={item.id}>
              <VideoCard info={item} />
            </Link>
          ))
        : "No videos found."}
    </div>
  );
};

export default VideoContainer;
