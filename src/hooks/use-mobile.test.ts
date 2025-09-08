import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { useIsMobile } from "./use-mobile";

const setupMatchMedia = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: window.innerWidth < 768,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
};

describe("useIsMobile", () => {
  beforeEach(() => {
    setupMatchMedia();
  });

  it("returns true when window width is less than 768", async () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 500 });
    const { result } = renderHook(() => useIsMobile());
    await waitFor(() => expect(result.current).toBe(true));
  });

  it("returns false when window width is greater than or equal to 768", async () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 1024 });
    const { result } = renderHook(() => useIsMobile());
    await waitFor(() => expect(result.current).toBe(false));
  });
});
