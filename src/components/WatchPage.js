import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/SidebarSlice";

const WatchPage = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  });
  return (
    <div>
      <iframe
        width="930"
        height="520"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
