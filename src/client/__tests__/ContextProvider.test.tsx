import { useContext } from "react";
import { render, waitFor } from "@testing-library/react-native";

import { Context, ContextProvider } from "../ContextProvider";

const TestComponent = () => {
  const context = useContext(Context);

  return <div style={{...context.theme.container}}>Component</div>;
};

const setup = () => {
  return render(
    <ContextProvider>
      <TestComponent/>
    </ContextProvider>
  );
};

describe("ContextProvider", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render", async () => {
    await waitFor(() => {
      expect(component.toJSON()).toBeTruthy();
    });
  });

  it("should render TestComponent", async () => {
    await waitFor(() => {
      expect(component.toJSON().children.toString()).toBe("Component");
    });
  });

  it("should render TestComponent with correct styling", async () => {
    await waitFor(() => {
      expect(component.toJSON().props.style).toStrictEqual({ flex: 1, position: "relative" });
    });
  });
});