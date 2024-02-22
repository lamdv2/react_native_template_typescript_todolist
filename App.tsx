import React from 'react';
import TestComponent from './src/components/TestComponent';
import {StatusBar} from 'react-native';
import TextComponent from './src/components/TextComponent';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      />
      <TextComponent text="fd" />
    </>
  );
};

export default App;
