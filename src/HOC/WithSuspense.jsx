import React from "react";
import PreLoader from "../components/common/PreLoader/PreLoader";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<div><PreLoader /> Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
