import React from 'react';
import {
 Man,
 Woman,
 Command
} from 'iconsax-react-native';
import { genderTypes } from '../../utils/constans';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return (
      <Man size={size} color={Colors.BLACK}  />
    );
  }  
  if (gender == genderTypes.FEMALE) {
    return (
      <Woman size={size} color={Colors.BLACK}  />
    );
  } 
  if (gender == genderTypes.UNNKNOWN) {
    return (
      <Command size={size} color={Colors.BLACK}  />
    );
  } 
};
export default GenderIcon;
