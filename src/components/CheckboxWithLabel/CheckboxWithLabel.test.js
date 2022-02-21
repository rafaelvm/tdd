import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import CheckboxWithLabel from "./CheckboxWithLabel";

// Dessa forma, o cleanup dentro do afterEach limpa seu teste @testing-library/react^9.0.0
afterEach(cleanup);

it("CheckboxWithLabel change the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  act(() => {
    fireEvent.click(getByLabelText(/off/i));
  });

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
