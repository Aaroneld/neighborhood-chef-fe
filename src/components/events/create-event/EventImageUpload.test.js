import React from "react";
import EventImageUpload from "./EventImageUpload.js";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Test EventImageUpload component", () => {
  let EventImageUploadComponent;
  beforeEach(() => {
    EventImageUploadComponent = render(<EventImageUpload />);
  });

  test("EventImageUpload component renders", () => {
    expect(EventImageUploadComponent).toBeDefined();
    expect(EventImageUploadComponent.getByText(/Upload/i));
  });
});
