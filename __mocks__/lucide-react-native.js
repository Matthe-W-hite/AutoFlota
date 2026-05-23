import React from 'react';
import { View } from 'react-native';

const MockIcon = ({ color, size, ...props }) => (
  <View {...props} style={[{ width: size ?? 24, height: size ?? 24, backgroundColor: color ?? 'transparent' }]} />
);

const icons = [
  'CarFront',
  'Eye',
  'EyeOff',
  'User',
  'Car',
  'Calendar',
  'AlertTriangle',
  'LifeBuoy',
  'CheckSquare',
  'Square',
  'ChevronLeft',
  'ChevronRight',
  'ChevronDown',
  'Fuel',
  'Settings2',
  'Users',
  'Briefcase',
  'CheckCircle',
  'HeartPulse',
  'FileText',
  'Camera',
  'ShieldCheck',
  'UserCog',
  'Info',
  'PhoneCall',
  'MessageSquare',
  'X',
];

const exportsObject = icons.reduce((acc, iconName) => {
  acc[iconName] = MockIcon;
  return acc;
}, {});

module.exports = exportsObject;
