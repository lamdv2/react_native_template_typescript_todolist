import React from 'react';
import TestComponent from './src/components/TestComponent';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      />
      <TestComponent />
    </>
  );
};

export default App;
