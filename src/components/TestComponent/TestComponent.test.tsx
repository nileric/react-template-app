import {describe, expect, test} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import {TestComponent} from "@components/TestComponent";

describe("TestComponent test", () => {
  test("Should increment value", () => {
    render(<TestComponent label="inc" />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Count: 1")).toBeDefined();
  });
});
