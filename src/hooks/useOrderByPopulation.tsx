import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * A hook that is used to fetch the name of a city a user searches for as well as its' population size.
 * 
 * @returns the function searchApi, an object that is either null or includes the name of the
 * city that the user searched for and its' population size, and an error message that is either
 * null or a string if the get request returned an empty geonames array (i.e. the city doesn't exist).
 */
export default function useCountryCode() {
    const [countryCode, setCountryCode] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const [threeBiggestCities, setThreeBiggestCities] = useState([]);
    const [dataIsFetched, setDataIsFetched] = useState(false);
    const [fetchingData, setfetchingData] = useState(false);

    const searchCountryCodeApi: any = async (enteredTerm: any) => {
        try {
            setfetchingData(true);
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredTerm,
                }
            });

            /* ... */
            if (response.data.geonames.length >= 1 && response.data.geonames[0].name === enteredTerm) {
                let countryCode = response.data.geonames[0].countryCode;
                // sets the country code
                setCountryCode(countryCode);
                // redudant
                setErrorMessage(""); // TODO: Remove, redudant once ResultsScreen takes user back to home screen but looks nicer now.
                // fetched country code data true, maybe should only have setThreeBiggestCitiesData
                //setDataIsFetched(true);
                //setfetchingData(false);
            } else {
                setErrorMessage("Country doesn't exist, please try again");
                setDataIsFetched(false);
                setfetchingData(false);
            }
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    const searchThreeBiggestCitiesApi: any = async (enteredTerm: any) => {
        try {
            setfetchingData(true);
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredTerm,
                }
            });

            /* ... */
            if (response.data.geonames.length >= 1 && response.data.geonames[0].name === enteredTerm) {
                let countryCode = response.data.geonames[0].countryCode;
                setThreeBiggestCities(countryCode);
                setErrorMessage(""); // TODO: Remove, redudant once ResultsScreen takes user back to home screen but looks nicer now.
                setDataIsFetched(true);
                setfetchingData(false);
            } else {
                setErrorMessage("Country doesn't exist, please try again");
                setDataIsFetched(false);
                setfetchingData(false);
            }
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    /* SearchByCityScreen uses this function, the result from calling the function and the error message.
    As such all three constant need to be returned to it. */
    return [searchCountryCodeApi, threeBiggestCities, errorMessage, dataIsFetched, fetchingData]; 
}