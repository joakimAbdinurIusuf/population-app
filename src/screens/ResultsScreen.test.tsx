import React from "react";
import ResultsScreen from "./ResultsScreen";
import TestRenderer from "react-test-renderer";

test("renders correctly", () => {
    const tree = TestRenderer.create(<ResultsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});