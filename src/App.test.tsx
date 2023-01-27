import { screen } from "@testing-library/react";
import { render } from "./tests/test-utils";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
});
