import React, { useEffect, useState } from "react";
import { getVideos } from "../api";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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

  return loading ? (
    "Loading.."
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
