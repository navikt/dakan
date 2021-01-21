import React from "react";
import { useSharedContext } from "../components/SharedContextProvider";

function CustomWidget({ children }) {
  const [ctx, dispatch] = useSharedContext();
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { ctx, dispatch })
      )}
    </>
  );
}

export default CustomWidget;
