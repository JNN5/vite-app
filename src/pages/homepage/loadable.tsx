import { lazyLoad } from "../../components/loadable";

export const Home = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
