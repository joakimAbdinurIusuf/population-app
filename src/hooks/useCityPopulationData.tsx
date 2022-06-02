import { useState } from 'react';
import GeoNames from '../api/GeoNames';

/**
 * A hook that is used to fetch the name of a city a user searches for as well as its' population size.
 * 
 * @returns The function searchApi.
 * @returns A result object that is either null or includes the first element of the geonames array in which 
 * the name of the city the user searched for an its' population size can be found. 
 * @returns An error message that is either null or a string if the get request returned an empty geonames array 
 * (i.e. the city doesn't exist). 
 * @returns Two booleans, one says whether data is being fetched or not, and the other whether it has been fetched or not.
 */
export default function useCityPopulationData() {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [dataIsFetched, setDataIsFetched] = useState(false);
    const [fetchingData, setfetchingData] = useState(false);

    const searchCityApi: any = async (enteredTerm: string) => {
        try {
            setfetchingData(true);
            enteredTerm.trim();
            const response = await GeoNames.get("/searchJSON", {
                params: {
                    username: "weknowit",
                    name_equals: enteredTerm,
                    /* Since cities are defined as inhabited places with a greater size and population than
                    towns or villages, I'm chosing to filter the results to only include cities with a population
                    size greater than 500. The reason for this is that certain names in the GeoNames api, e.g.
                    "Hello", are (1) not a city (for instance, it might be a mountain or lake), or (2) includes 
                    the string "city, village" in the fclName attribute, but have a population of 0. I want to 
                    filter out these places here, as it means we don't have to filter these places using custom logic. */
                    cities: "cities500", 
                }
            });

            let nameOfCityInFirstGeonamesElement: string = response.data.geonames[0].name.trim();

            /* When we enter the name of a city, e.g. Stockholm, it appears as the first element of the geonames array. 
            Occasionally, more than one city has the same name (e.g. "London"). In this case, we assume the user meant
            the city of London in England, which is the first element in the geonames array. Therefore, we set results 
            to be the first element of the geonames array. We also check that the name key of the first element contains
            a value equal to the entered term. Otherwise, a search for "Sa" returned the city Sia. Not sure why this is,
            since I added the name_equals parameter. But checking this manually works. 
            
            BUG: The second check results in an error message being thrown if there is white space after the entered term. */
            if (response.data.geonames.length >= 1 && nameOfCityInFirstGeonamesElement == enteredTerm) {
                let cityTheUserSearchedFor = response.data.geonames[0];
                setResult(cityTheUserSearchedFor);
                setErrorMessage(""); 
                setDataIsFetched(true);
                setfetchingData(false);
            } else {
                setErrorMessage("City doesn't exist, please try again");
                setDataIsFetched(false);
                setfetchingData(false);
            }
             
        } catch (err) {
            setErrorMessage("Oops! Something went wrong...")
        }
    };

    /* SearchByCityScreen uses this function, the result from calling the function and the error message.
    As such all three constant need to be returned to it. */
    return [searchCityApi, result, errorMessage, dataIsFetched, fetchingData]; 
}