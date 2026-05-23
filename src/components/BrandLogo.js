import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const BRAND_STYLES = {
  toyota: {
    container: { backgroundColor: colors.white, borderColor: '#EB0A1E', borderWidth: 2 },
    text: { color: '#EB0A1E', fontSize: 9, fontWeight: 'bold', letterSpacing: 0.5 },
    label: 'TOYOTA',
  },
  ford: {
    container: { backgroundColor: '#003478' },
    text: { color: colors.white, fontSize: 11, fontWeight: 'bold', fontStyle: 'italic' },
    label: 'Ford',
  },
  skoda: {
    container: { backgroundColor: '#4BA82E' },
    text: { color: colors.white, fontSize: 12, fontWeight: 'bold' },
    label: 'ŠKODA',
  },
  volkswagen: {
    container: { backgroundColor: '#001E50' },
    text: { color: colors.white, fontSize: 10, fontWeight: 'bold' },
    label: 'VW',
  },
};

export default function BrandLogo({ brand, size = 48 }) {
  const config = BRAND_STYLES[brand] ?? BRAND_STYLES.toyota;

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
        config.container,
      ]}
    >
      <Text style={[styles.text, config.text]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
  },
});
