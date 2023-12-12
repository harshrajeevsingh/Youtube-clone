import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="my-4 ml-5 p-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
