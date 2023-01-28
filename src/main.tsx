import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HelmetProvider } from "react-helmet-async";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

if (process.env.NODE_ENV === "development") {
  const browser = await import("./mocks/browser");
  browser.worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
