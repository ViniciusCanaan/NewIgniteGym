import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { SignIn } from '@screens/SignIn';
const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
};
export default App;
