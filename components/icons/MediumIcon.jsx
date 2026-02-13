import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function MediumIcon({ size = 24, color = '#000' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 12h8"/>
    </Svg>
    );
}