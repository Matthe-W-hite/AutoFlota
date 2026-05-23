import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User } from 'lucide-react-native';
import { colors } from '../constants/colors';

export default function ScreenTopHeader({ title, onProfilePress, backgroundColor = colors.background }) {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.avatar} onPress={onProfilePress}>
        <User color={colors.textSecondary} size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: colors.avatarBg,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
