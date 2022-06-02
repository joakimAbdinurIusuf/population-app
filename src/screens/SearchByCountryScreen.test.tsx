import React from "react";
import { render } from "@testing-library/react-native";
import SearchByCountryScreen from "./SearchByCountryScreen";

/* TODO: The test is getting the following error message: 
"TypeError: Cannot read properties of undefined (reading 'flushOperations')".
Resolve it.*/
it("renders default elements", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<SearchByCountryScreen />);

    expect(getAllByText("SEARCH BY COUNTRY").length).toBe(1);
    getAllByPlaceholderText("Enter a country");
});

// shows country doesn't exist error message

// shows activity indicator when data is being fetched

// navigates to threeBiggestCitiesScreen when data has been fetched