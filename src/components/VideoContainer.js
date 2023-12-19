import React, { useEffect, useState } from "react";
import { getVideos } from "../api";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videoData, setVideodata] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useSelector((store) => store.location.locationName);
  useEffect(() => {
    getVideos(location)
      .then((json) => {
        console.log(json);
        setLoading(false);
        setVideodata(json.items);

        console.log(location);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, [location]);

  const shimmerCardsArray = Array.from({ length: 15 });

  return loading ? (
    <div className="flex flex-wrap gap-5 justify-center">
      {shimmerCardsArray.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap gap-5 mt-3">
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
