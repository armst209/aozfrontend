import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../index";

describe("Login", () => {
  it("should render without error", () => {
    expect(() => render(<Login />)).not.toThrowError();
  });
});
