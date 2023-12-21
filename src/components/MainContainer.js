import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const toggleBar = useSelector((store) => store.sidebar.isVisible);

  return (
    <div
      className={`mt-5  p-4 dark:bg-zinc-900 ${toggleBar ? "ml-52" : "ml-5"}`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
