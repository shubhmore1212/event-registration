import { lazy } from "react";

export const lazyLoad = (path: any) => {
  return lazy(() => import(path));
};
