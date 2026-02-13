import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function NextIcon({ size = 26, color = '#000' }) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx="12" cy="12" r="10" />
      <Path d="M10 8l4 4l-4 4" />
    </Svg>
  );
}
