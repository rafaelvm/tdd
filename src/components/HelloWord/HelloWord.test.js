import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HelloWord from "./HelloWord";

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

act(() => {
  // Renderizar componentes ou aventos
});

it("render component with or without a name", () => {
  act(() => {
    render(<HelloWord />, container);
  });

  expect(container.textContent).toBe("Hello, Stranger");

  act(() => {
    render(<HelloWord name="Fulano" />, container);
  });

  expect(container.textContent).toBe("Hello, Fulano");

  act(() => {
    render(<HelloWord name="Fulaninho" />, container);
  });

  expect(container.textContent).toBe("Hello, Fulaninho");
});
