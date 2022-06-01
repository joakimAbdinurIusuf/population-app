import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * 
 * @returns 
 */
export default function useCountryCode() {
    const [countryCode, setCountryCode] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
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

            let nameOfCountryInFirstGeonamesElement = response.data.geonames[0].name;

            /* When we enter the name of a city, e.g. Stockholm, it appears as the first element of the geonames array. 
            Occasionally, more than one city has the same name (e.g. "London"). In this case, we assume the user meant
            the city of London in England, which is the first element in the geonames array.Therefore, we set results 
            to be the first element of the geonames array. We also check that the name key of the first element contains
            a value equal to the entered term. Otherwise, a search for "Sa" returned the city Sia. Not sure why this is,
            since I added the name_equals parameter. But checking this manually works. */
            if (response.data.geonames.length >= 1 && nameOfCountryInFirstGeonamesElement === enteredTerm) {
                let countryCode = response.data.geonames[0].countryCode;
                setCountryCode(countryCode);
                setErrorMessage(""); 
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
    return [searchCountryCodeApi, countryCode, errorMessage, dataIsFetched, fetchingData]; 
}