import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme } from 'react-native-elements';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import AddTransaction from './screens/AddTransaction';
import MenuModal from './screens/MenuModal';
import {
  selectLoading,
  restoreToken,
} from './store/reducers/restoreAuthReducer';

import {
  selectToken
} from './store/reducers/authReducer';

function Router(props) {
  const { theme } = props;

  const loadingRestore = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(restoreToken());
  }, [dispatch]);

  const RootStack = createStackNavigator();

  const AuthStack = createStackNavigator();
  function AuthStackScreen() {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <AuthStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      </AuthStack.Navigator>
    );
  }

  const MainStack = createStackNavigator();
  function MainStackScreen() {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 10
          },
          headerRightContainerStyle: {
            paddingHorizontal: 10
          }
        }}
      >
        <MainStack.Screen name="Home" component={Home} options={{ title: 'Parrot Wings' }} />
      </MainStack.Navigator>
    );
  }

  let content;
  if (token == null) {
    content = (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{ headerShown: false }}
      />
    );
  } else {
    content = (
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
    );
  }

  if (loadingRestore) {
    return <RootStack.Screen name="Splash" component={SplashScreen} options={{ title: 'Splash' }} />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        {content}
        {token ? (
          <>
            <RootStack.Screen name="AddTransaction" component={AddTransaction} options={{ title: 'AddTransaction' }} />
            <RootStack.Screen name="MenuModal" component={MenuModal} options={{ title: 'MenuModal' }} />
          </>
        ) : null}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(Router);
