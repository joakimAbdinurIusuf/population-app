import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * A hook that is used to fetch the names and population sizes of the three biggest cities in the country
 * that the user search for.
 * 
 * @returns The function searchCountryCodeApi.
 * @returns A threeBiggestCities object that is either null or includes the names and population sizes of the three biggest cities
 * in the country that the user searched for.
 * @returns An error message that is either null or a string if the get request returned an empty geonames array 
 * (i.e. the country doesn't exist). 
 * @returns Two booleans, one says whether data is being fetched or not, and the other whether it has been fetched or not.
 */
export default function useOrderCitiesBySize() {
    const [threeBiggestCities, setThreeBiggestCities] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [dataIsFetched, setDataIsFetched] = useState(false);
    const [fetchingData, setfetchingData] = useState(false);

    /**
     * We need to fetch the country code of the country the user searched for, e.g. "IT" for "Italy".
     * The reason for this is that the country parameter in the GeoNames api only takes a country code, not
     * the name of a country. Unfortunately it doesnät have a countryName parameter. So to search for the 
     * three biggest cities in a country, we have to pass the country code, which is what we get from the
     * countryCodeResponse below. We then use this country code, in combination with the orderby parameter,
     * to fetch the three biggest cities (order by population size). This happens in the second get request below.
     * 
     * @param enteredCountry The name of the country that the user searched for.
     */
    const searchCountryCodeApi: any = async (enteredCountry: string) => {
        try {
            setfetchingData(true);

            const countryCodeResponse = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredCountry,
                }
            });

            /* If GeoNames doesn't return an object with the name of the country, or an empty array, it doesn't exist. 
            
            BUG: The second check results in an error message being thrown if there is white space after the entered term. */
            if (countryCodeResponse.data.geonames.length < 1 || countryCodeResponse.data.geonames[0].name != enteredCountry) {
                setErrorMessage("Country doesn't exist, please try again");
                setDataIsFetched(false);
                setfetchingData(false);
            } else {
                const countryCode = countryCodeResponse.data.geonames[0].countryCode;
                const url: string = "/searchJSON?orderby='population'&cities='cities500'&username=weknowit&country=" + countryCode;
                const response = await GeoNames.get(url);

                /* 
                The following doesn't work for some reason, very strange:

                const response = await GeoNames.get("/searchJSON", {
                    params: {
                        username: "weknowit",
                        country: countryCode,
                        orderby: "population",
                        cities: "cities500",
                    }
                }); 

                It should be equivalent to the url, but it isn't.
                
                */

                let nameOfBiggestCity = response.data.geonames[0].name;
                let sizeOfBiggestCity = response.data.geonames[0].population;
                let nameOfSecondBiggestCity = response.data.geonames[1].name;
                let sizeOfSecondBiggestCity = response.data.geonames[1].population;
                let nameOfThirdBiggestCity = response.data.geonames[2].name;
                let sizeOfThirdBiggestCity = response.data.geonames[2].population;
                let countryName = response.data.geonames[0].countryName;
                let arr: any = [nameOfBiggestCity, sizeOfBiggestCity,
                        nameOfSecondBiggestCity, sizeOfSecondBiggestCity,
                        nameOfThirdBiggestCity, sizeOfThirdBiggestCity, countryName];

                console.log(arr);

                if (response.data.geonames.length >= 3) {
                    setThreeBiggestCities(arr);
                    setErrorMessage(""); 
                    setDataIsFetched(true);
                    setfetchingData(false);
                } else {
                    setErrorMessage("Country doesn't exist, please try again");
                    setDataIsFetched(false);
                    setfetchingData(false);
                }
            }
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    return [searchCountryCodeApi, threeBiggestCities, errorMessage, dataIsFetched, fetchingData]; 
}