import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';
import {
  Input, Button, Icon, withTheme
} from 'react-native-elements';
import {
  selectError,
  setError,
  signUp
} from '../store/reducers/authReducer';

function SignUp(props) {
  const { theme, navigation } = props;

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const [username, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRePassword] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Back"
          type="clear"
          icon={(
            <Icon
              type="material"
              name="arrow-back"
              size={24}
              color="white"
            />
          )}
          onPress={() => { dispatch(setError(null)); navigation.goBack(); }}
        />
      ),
    });
  }, [navigation, dispatch]);

  const onSignupPress = () => {
    let errorText = '';
    if (!username) {
      errorText += 'Required field: Name. ';
    } else if (username.length < 5) {
      errorText += 'The name must be more than 5 letters. ';
    }
    if (!email) {
      errorText += 'Required field: Email. ';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errorText += 'Invalid email address. ';
    }
    if (!password) {
      errorText += 'Required field: Password. ';
    } else if (password.length < 5) {
      errorText += 'Password must be 5 characters or more. ';
    }
    if (!password) {
      errorText += 'Required field: Re-password. ';
    }
    if (password && repassword && password !== repassword) {
      errorText += 'Passwords do not match.';
    }
    if (errorText) {
      dispatch(setError(errorText));
    } else {
      dispatch(signUp({ username, email, password }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Input
          placeholder="John Smith"
          leftIcon={(
            <Icon
              type="material"
              name="person"
              size={24}
              color={theme.colors.primary}
            />
          )}
          value={username}
          onChangeText={setName}
        />
      </View>
      <View>
        <Input
          placeholder="email@gmail.com"
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
      <View>
        <Input
          placeholder="Password Again"
          secureTextEntry
          leftIcon={(
            <Icon
              type="material"
              name="https"
              size={24}
              color={theme.colors.primary}
            />
          )}
          value={repassword}
          onChangeText={setRePassword}
        />
      </View>
      <Text style={styles.error}>
        {error}
      </Text>
      <View style={styles.button}>
        <Button title="Sign up" onPress={onSignupPress} />
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
  error: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    color: 'red'
  },
  button: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '16px'
  }
});

export default withTheme(SignUp);
