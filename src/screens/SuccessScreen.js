import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle } from 'lucide-react-native';
import { colors } from '../constants/colors';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CheckCircle color={colors.success} size={100} />
      </View>

      <Text style={styles.title}>Szerokiej drogi!</Text>
      <Text style={styles.subtitle}>
        Pojazd został pomyślnie odebrany. Przestrzegaj przepisów i jedź bezpiecznie.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DashboardMain')}
      >
        <Text style={styles.buttonText}>WRÓĆ DO KOKPITU</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
