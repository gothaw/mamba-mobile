import { useContext } from "react";
import { Text } from "react-native";
import { render, waitFor } from "@testing-library/react-native";

import { Context, ContextProvider } from "../ContextProvider";

const TestComponent = () => {
  const context = useContext(Context);

  return <Text testID={"component"} style={{...context.theme.container}}>Component</Text>;
};

const setup = () => {
  return render(
    <ContextProvider>
      <TestComponent/>
    </ContextProvider>
  );
};

describe("ContextProvider", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should render", async () => {
    await waitFor(() => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  it("should render TestComponent with correct styling", async () => {
    const testComponent = await wrapper.findByTestId("component");

    await waitFor(() => {
      expect(testComponent).toBeTruthy();
      expect(wrapper.toJSON().props.style).toStrictEqual({flex: 1, position: "relative"});
    });
  });
});