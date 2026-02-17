import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { RouterProvider } from "react-router";
import Amazon from "../../Amazon/Amazon";
import SaraKaam from "../Store/SaraKaam";
import DashBorad from "../../DashBorad/DashBorad";

const RoutingArea = () => {
  const ways = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Amazon /> },
        { path: "/dashborad", element: <DashBorad /> },
      ],
    },
  ]);
  return (
    <SaraKaam>
      <RouterProvider router={ways} />
    </SaraKaam>
  );
};

export default RoutingArea;
