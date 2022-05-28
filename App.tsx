import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchByCityScreen from './src/screens/SearchByCityScreen';
import SearchByCountryScreen from './src/screens/SearchByCountryScreen';
import ResultsScreen from './src/screens/ResultsScreen';

/*
Using a stack navigator as opposed to a botton tab or drawer navigator
as it fits best with the requirements. 
*/
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SearchByCity: SearchByCityScreen,
    SearchByCountry: SearchByCountryScreen,
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