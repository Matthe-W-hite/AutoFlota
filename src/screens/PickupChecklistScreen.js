import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CheckSquare, Square } from 'lucide-react-native';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';
import { activeReservation, pickupChecklistItems } from '../constants/mockData';

const initialChecks = pickupChecklistItems.reduce((acc, item) => {
  acc[item.key] = false;
  return acc;
}, {});

export default function PickupChecklistScreen({ navigation }) {
  const [checks, setChecks] = useState(initialChecks);

  const toggleCheck = (key) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  const allChecked = pickupChecklistItems.every((item) => checks[item.key]);

  return (
    <View style={styles.container}>
      <ScreenHeader title="Odbiór pojazdu" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>{activeReservation.label}</Text>
          <Text style={styles.infoDesc}>Zanim ruszysz, potwierdź stan pojazdu.</Text>
        </View>

        <Text style={styles.sectionTitle}>Checklista obowiązkowa</Text>

        {pickupChecklistItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={styles.checkItem}
            onPress={() => toggleCheck(item.key)}
          >
            {checks[item.key] ? (
              <CheckSquare color={colors.success} size={24} />
            ) : (
              <Square color={colors.textMuted} size={24} />
            )}
            <Text style={styles.checkText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.submitButton, !allChecked && styles.submitButtonDisabled]}
          disabled={!allChecked}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.submitButtonText}>ROZPOCZNIJ TRASĘ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  checkText: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
    flex: 1,
  },
  bottomBar: {
    backgroundColor: colors.white,
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  submitButton: {
    backgroundColor: colors.success,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
