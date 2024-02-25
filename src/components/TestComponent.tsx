/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import CardComponent from './CardComponent';
import {globalStyles} from './../styles/globalStyles';
import {colors} from '../constants/colors';
import SectionComponent from './SectionComponent';

const TestComponent = () => {
  return (
    <View>
      <CardComponent>
        <RowComponent>
          <TextComponent text={''} />
        </RowComponent>
      </CardComponent>
      <SectionComponent>
        <CardComponent styles={[globalStyles.card, {marginTop: 16}]}>
          <RowComponent
            onPress={() => console.log('Hi Dvan Lam!')}
            justify="space-evenly">
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextComponent
                text={'Be Product'}
                color={colors.gray1}
                styles={{flex: 1, justifyContent: 'center'}}
              />
            </View>
            <TextComponent text={'Be Product'} color={colors.gray1} />
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </View>
  );
};

export default TestComponent;
