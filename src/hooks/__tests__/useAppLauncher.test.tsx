import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useAppLauncher } from "../useAppLauncher";

describe("useAppLauncher", () => {
  let hook;
  const callback = jest.fn();

  beforeEach(async () => {
    hook = renderHook(() => useAppLauncher(callback));
  });

  afterEach(async () => {
    hook = null;
  });

  it("should have correct initial state and callback has not been called", async () => {
    const { isAppReady } = hook.result.current;

    expect(isAppReady).toBe(false);
    expect(callback).not.toHaveBeenCalled();
  });

  it("should update isAppReady when assets are loaded and callback was called", async () => {
    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      const { isAppReady } = hook.result.current;

      expect(isAppReady).toBe(true);
      expect(callback).toHaveBeenCalled();
    });
  });
});