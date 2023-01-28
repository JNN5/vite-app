import { lazyLoad } from "../../components/loadable";

export const ErrorPage = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
