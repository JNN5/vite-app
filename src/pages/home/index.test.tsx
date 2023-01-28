import { screen } from "@testing-library/react";
import { render } from "../../test-setup/test-utils";

import Page from ".";

describe("Page", () => {
  it("renders page", () => {
    render(<Page />);

    screen.debug();

    // check if App components renders headline
  });
});
