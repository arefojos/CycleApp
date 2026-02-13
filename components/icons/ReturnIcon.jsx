import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function ReturnIcon({ size = 24, color = '#000' }) {
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
      {/* Círculo exterior */}
      <Circle cx="12" cy="12" r="10" />
      {/* Flecha hacia la izquierda */}
      <Path d="M14 16l-4-4l4-4" />
    </Svg>
  );
}
