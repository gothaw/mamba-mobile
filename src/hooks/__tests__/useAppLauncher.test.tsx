import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useAppLauncher } from "../useAppLauncher";

describe("useAppLauncher", () => {
  let hook;

  beforeEach(async () => {
    hook = renderHook(useAppLauncher);
  });

  afterEach(async () => {
    hook = null;
  });

  it("should have correct initial state", async () => {
    const { isAppReady, onLayoutCallback } = hook.result.current;

    expect(isAppReady).toBe(false);
    expect(onLayoutCallback).toBeFunction();
  });

  it("should update isAppReady when mounted", async () => {
    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      const { isAppReady, onLayoutCallback } = hook.result.current;

      expect(isAppReady).toBe(true);
      expect(onLayoutCallback).toBeFunction();
    });
  });
});