import React from 'react';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  Book1,
  PresentionChart,
  LocationTick,
  Setting2,
} from 'iconsax-react-native';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == EPISODES) {
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == LOCATIONS) {
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == SETTINGS) {
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  s;
};
export default TabIcon;
