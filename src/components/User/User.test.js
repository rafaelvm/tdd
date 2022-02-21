import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";

let container = null;

beforeEach(() => {
  // Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpa o teste
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render user data", async () => {
  const fakeUser = {
    name: "Fulano",
    age: "24",
    address: "Avenue 123",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // Remove chamada mockada
  global.fetch.mockRestore();
});
