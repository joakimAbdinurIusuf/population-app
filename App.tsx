import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchByCityScreen from './src/screens/SearchByCityScreen';
import SearchByCountryScreen from './src/screens/SearchByCountryScreen';
import ThreeBiggestCitiesScreen from './src/screens/ThreeBiggestCitiesScreen';
import ResultsScreen from './src/screens/ResultsScreen';

/**
 * Sets up the name of the screens that the user can navigate to, and sets the intial
 * route to be to HomeScreen.
 */
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SearchByCity: SearchByCityScreen,
    SearchByCountry: SearchByCountryScreen,
    BiggestCities: ThreeBiggestCitiesScreen,
    Results: ResultsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'CityPop',
    },
  }
);

export default createAppContainer(navigator);