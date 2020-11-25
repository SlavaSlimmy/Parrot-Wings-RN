import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import {
  selectLoading,
  restoreToken,
} from './store/reducers/restoreAuthReducer';

import {
  selectToken
} from './store/reducers/authReducer';

const Stack = createStackNavigator();

function Router() {
  const loadingRestore = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(restoreToken());
  }, []);

  let content;
  if (loadingRestore) {
    content = <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} />;
  } else if (token == null) {
    content = (
      <>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      </>
    );
  } else {
    content = (
      <Stack.Screen name="Home" component={Home} options={{ title: 'My home' }} />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {content}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
