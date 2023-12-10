import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { StatusBar } from 'react-native';
const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <SignUp />
    </NativeBaseProvider>
  );
};
export default App;
