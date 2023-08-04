import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import DetailsScreen from './screens/DetailsScreen';
import ClothListItem from './components/DressItem';
import { Provider } from 'react-redux';
import store from './Store';
import StackNavigator from './StackNavigator';
export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <StatusBar style="auto" color="#E6E6FA" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
