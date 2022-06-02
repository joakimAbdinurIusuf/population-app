import React from "react";
import { render } from "@testing-library/react-native";
import SearchByCityScreen from "./SearchByCityScreen";

it("renders default elements", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<SearchByCityScreen />);

    expect(getAllByText("SEARCH BY CITY").length).toBe(1);
    getAllByPlaceholderText("Enter a city");
});

// shows city doesn't exist error message

// shows activity indicator when data is being fetched

// navigates to results screen when data has been fetched

