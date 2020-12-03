import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet, View, ScrollView
} from 'react-native';
import {
  Input, Button, Icon, withTheme
} from 'react-native-elements';
import {
  selectError,
  setError,
  login
} from '../store/reducers/authReducer';
import ErrorView from '../components/ErrorView';

function Login(props) {
  const { theme, navigation } = props;

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View>
        <Input
          placeholder="Email"
          leftIcon={(
            <Icon
              type="material"
              name="email"
              size={24}
              color={theme.colors.primary}
            />
          )}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Input
          placeholder="Password"
          secureTextEntry
          leftIcon={(
            <Icon
              type="material"
              name="https"
              size={24}
              color={theme.colors.primary}
            />
          )}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <ErrorView text={error} />

      <View style={styles.button}>
        <Button title="Log in" onPress={() => { dispatch(login({ email, password })); }} />
      </View>
      <View style={styles.button}>
        <Button title="Sign up" onPress={() => { dispatch(setError(null)); navigation.navigate('SignUp'); }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '16px'
  },
  button: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '16px'
  }
});

export default withTheme(Login);
