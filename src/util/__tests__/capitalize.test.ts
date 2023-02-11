import { capitalizeFirstLetter } from "../capitalize";

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    const string = "lorem ipsum";

    expect(capitalizeFirstLetter(string)).toBe("Lorem ipsum");
  });
});
