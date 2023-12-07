import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="m-4 p-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
