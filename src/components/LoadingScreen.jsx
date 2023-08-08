import React, { useState } from "react";
import { HashLoader } from "react-spinners";

export const LoadingScreen = () => {
  return (
    <div className="loader">
      <HashLoader
        color={"#d4618a"}
        size={65}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
