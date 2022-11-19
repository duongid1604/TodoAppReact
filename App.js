import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Business from './src/screens/Business';
import Details from './src/screens/Details';
import HomeScreens from './src/screens/HomeScreens';
import Personal from './src/screens/Personal';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="Home Screen" component={HomeScreens} />
          <Stack.Screen name="Personal" component={Personal} />
          <Stack.Screen name="Business" component={Business} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
