import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Song from "../pages/Song";
import { createAttributeString } from "../pages/Song";

describe("testing song functions", () => {
  test("an attribute string is properly created with pokemon object", () => {
    render(
      <BrowserRouter>
        <Song />
      </BrowserRouter>
    );

    const testObj = {
      data: {
        color: {
          name: "blue",
        },
        egg_groups: [{ name: "water" }],
      },
    };

    expect(createAttributeString(testObj)).not.toBeUndefined;
  });

  test("humanshape is not included in the attribute array", () => {
    render(
      <BrowserRouter>
        <Song />
      </BrowserRouter>
    );

    const testObj = {
      data: {
        color: {
          name: "white",
        },
        egg_groups: [{ name: "humanshape" }],
      },
    };

    expect(createAttributeString(testObj)).not.toBe("humanshape");
  });
});
