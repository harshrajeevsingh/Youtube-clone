import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/SidebarSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const LiveComponent = () => {
  const toggleBar = useSelector((store) => store.sidebar.isVisible);
  if (toggleBar) return null;
  return (
    <div className="bg-slate-300 w-full">
      <LiveChat />
    </div>
  );
};
const WatchPage = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  });
  return (
    <div className="mx-5 mt-10 w-full">
      <div className="flex ">
        <div>
          <iframe
            width="930"
            height="520"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="bg-slate-300 w-full">
          <LiveChat />
        </div> */}
        <LiveComponent />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
