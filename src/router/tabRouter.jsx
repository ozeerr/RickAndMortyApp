import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chaaracters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Colors from '../theme/colors';
import TabIcon from '../components/router/taabIcon';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.PRIMARY,
        headerRight: props => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Chaaracters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
