import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Components
import Tv3D from "./components/Tv3D";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Tv3D/>}></Route>)
);

export default router;
