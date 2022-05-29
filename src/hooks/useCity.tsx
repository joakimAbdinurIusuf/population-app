import React, { useState } from 'react';
import GeoNames from '../api/GeoNames';

export default function useCity() {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi: any = async (enteredCity: any) => {
        try {
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredCity, // searchTerm,
                    cities: "cities1000"
                }
            });
    
            /*
            When we enter the name of a city, e.g. Stockholm, it appears as the first 
            element of the geonames array. Therefore, we set results to only include
            that object. 
    
            We also have to check that the fclName attribute contains the substring "city", as
            we are only interested in citites, not mountains for instance. If it doesn't, we 
            don't add the object to result and we display an error message. 
            */
            if (response.data.geonames[0].fclName.includes("city")) {
                setResult(response.data.geonames[0]);
                setErrorMessage("");
            } else {
                setErrorMessage("Oops! Looks like that city doesn't exist :(")
            }
        } catch (err) {
            setErrorMessage("Oops! Looks like that city doesn't exist :(")
        }
    };

    return [searchApi, result, errorMessage]; // needed in SearchByCityScreen
}