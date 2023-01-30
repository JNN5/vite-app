import { screen } from "@testing-library/react";
import { render } from "./test-setup/test-utils";

import App from "./App";

describe("Page", () => {
  it("renders page", () => {
    render(<App />);

    screen.debug();
  });

  it("matches screenshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
