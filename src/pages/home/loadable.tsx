import { lazyLoad } from "../../components/loadable";

export const HomePage = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
