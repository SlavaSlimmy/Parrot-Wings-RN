import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';
import {
  Input, Button, Icon, withTheme
} from 'react-native-elements';
// import {
//   NavigationScreenComponent,
//   NavigationScreenProps,
//   NavigationStackScreenOptions
// } from 'react-navigation';
import {
  selectError
} from '../store/reducers/authReducer';

function Login(props) {
  const { theme, navigation } = props;

  const error = useSelector(selectError);

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
      <Text style={styles.error}>
        {error}
      </Text>
      <View style={styles.button}>
        <Button title="Log in" onPress={() => { console.log('email', email); }} />
      </View>
      <View style={styles.button}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
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

export default withTheme(Login);
