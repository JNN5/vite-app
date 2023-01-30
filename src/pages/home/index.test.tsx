import { screen } from "@testing-library/react";
import { render, userEvent } from "../../test-setup/test-utils";

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

  it("select displayes selected amount of dogs", async () => {
    // Given
    render(<Page />);

    expect(screen.getByRole("option", { name: "10" }).selected).toBe(true);
    expect(screen.getAllByRole("option").length).toBe(4);

    // When
    await userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "5" })
    );

    // Then
    expect(screen.getByRole("option", { name: "5" }).selected).toBe(true);
  });
});
