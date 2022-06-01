import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * 
 * @returns 
 */
export default function useOrderByPopulation() {
    const [threeBiggestCities, setThreeBiggestCities] = useState([]);
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

            console.log(response.data.geonames[0]);
            
            /* ... */
            if (response.data.geonames.length >= 1 && response.data.geonames[0].name === enteredTerm) {
                let countryCode = response.data.geonames[0].countryCode;
                console.log(countryCode);
                setErrorMessage(""); 
                searchThreeBiggestCitiesApi(countryCode);
            } else {
                setErrorMessage("Country doesn't exist, please try again");
                setDataIsFetched(false);
                setfetchingData(false);
            }
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    const searchThreeBiggestCitiesApi: any = async (countryCode: any) => {
        try {
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    country: countryCode,
                    orderby: "population",
                }
            });

            //console.log(response.data.geonames[0]);
            //console.log(response.data.geonames[1]);
            //console.log(response.data.geonames[2]);

            /* ... */
            if (response.data.geonames.length >= 3) {
                let numberOfCities = 3;
                //for (let i = 0; i < numberOfCities; i++) {
                //    setThreeBiggestCities(response.data.geonames[i]);
                //}
                setThreeBiggestCities(response.data.geonames[0]);
                //console.log(threeBiggestCities);
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

    /* ... */
    return [searchCountryCodeApi, threeBiggestCities, errorMessage, dataIsFetched, fetchingData]; 
}