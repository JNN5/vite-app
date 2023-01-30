import { screen } from "@testing-library/react";
import { render } from "../../test-setup/test-utils";
import userEvent from "@testing-library/user-event";

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

describe("Interactions", () => {
  it("counter adds 3", async () => {
    // Given
    render(<Page />);

    // When
    await userEvent.click(screen.getByText("count is 0"));

    // Then
    expect(screen.getByText("count is 3")).toBeVisible();
  });
});
