import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * 
 * @returns 
 */
export default function useCountryCode() {
    const [threeBiggestCities, setThreeBiggestCities] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [dataIsFetched, setDataIsFetched] = useState(false);
    const [fetchingData, setfetchingData] = useState(false);

    const searchCountryCodeApi: any = async (enteredCountryCode: string) => {
        try {
            setfetchingData(true);

            const url: string = "/searchJSON?'orderby='population'&username=weknowit&country=" + enteredCountryCode;
            const response = await GeoNames.get(url);
            
            /* 
            The following doesn't work for some reason:

            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredCountryCode,
                    orderby: 'population',
                }
            }); 
            
            */

            let nameOfBiggestCity = response.data.geonames[0].name;
            let sizeOfBiggestCity = response.data.geonames[0].population;
            let nameOfSecondBiggestCity = response.data.geonames[1].name;
            let sizeOfSecondBiggestCity = response.data.geonames[1].population;
            let nameOfThirdBiggestCity = response.data.geonames[2].name;
            let sizeOfThirdBiggestCity = response.data.geonames[2].population;
            let arr: any = [nameOfBiggestCity, sizeOfBiggestCity,
                    nameOfSecondBiggestCity, sizeOfSecondBiggestCity,
                    nameOfThirdBiggestCity, sizeOfThirdBiggestCity];

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
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    return [searchCountryCodeApi, threeBiggestCities, errorMessage, dataIsFetched, fetchingData]; 
}