import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Contact from "./Contact";

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

jest.mock("./Map/Map", () => {
  return function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

it("should render contact information", () => {
  const center = { lat: 0, long: 0 };
  act(() => {
    render(
      <Contact
        name="Carlin"
        email="carlin@example.com"
        site="https://test.com"
        center={center}
      />,
      container
    );

    expect(
      container.querySelector("[data-testid='email']").getAttribute("href")
    ).toEqual("mailto:carlin@example.com");

    expect(
      container.querySelector("[data-testid='site']").getAttribute("href")
    ).toEqual("https://test.com");

    expect(container.querySelector("[data-testid='map']").textContent).toEqual(
      "0:0"
    );
  });
});
