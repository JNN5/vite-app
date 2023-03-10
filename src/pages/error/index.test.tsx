import { screen } from "@testing-library/react";
import { render } from "../../test-setup/test-utils";

import Page from ".";

describe("Page", () => {
  it("renders page", () => {
    render(<Page />);

    screen.debug();
  });

  it("matches screenshot", () => {
    const { asFragment } = render(<Page />);

    expect(asFragment()).toMatchSnapshot();
  });
});
