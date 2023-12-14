import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/SidebarSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  });
  return (
    <div className="mx-5 mt-10">
      <iframe
        width="930"
        height="520"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
