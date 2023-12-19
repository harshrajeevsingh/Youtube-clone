import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="mt-5 ml-5 p-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
