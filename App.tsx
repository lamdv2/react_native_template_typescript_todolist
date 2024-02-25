import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from './src/constants/colors';
import TestComponent from './src/components/TestComponent';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={colors.bgColor}
      />
      <TestComponent />
    </>
  );
};

export default App;
