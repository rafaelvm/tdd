import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

test("Mudar a classe do componente quando tiver com hover", () => {
  const { act, create } = renderer;

  const component = create(<Link page="http://facebook.com">Facebook</Link>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
