import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchByCityScreen from './src/screens/SearchByCityScreen';
import SearchByCountryScreen from './src/screens/SearchByCountryScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SearchByCity: SearchByCityScreen,
    SearchByCountry: SearchByCountryScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);