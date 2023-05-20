import { describe, expect } from "vitest";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInDocument();
});
