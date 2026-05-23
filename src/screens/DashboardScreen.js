import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { User } from 'lucide-react-native';
import { colors } from '../constants/colors';
import { activeReservation, currentUser, fleetVehicle } from '../constants/mockData';
import { toyotaCorollaImage } from '../constants/images';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Cześć, {currentUser.firstName}!</Text>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => navigation.navigate('Profil')}
        >
          <User color={colors.textSecondary} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Twój wyjazd na dzisiaj</Text>
      <View style={styles.activeCard}>
        <Text style={styles.carNameActive}>
          {activeReservation.name} ({activeReservation.plate})
        </Text>
        <Text style={styles.carDetails}>Godzina: {activeReservation.time}</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('PickupChecklist')}
        >
          <Text style={styles.primaryButtonText}>ODBIERZ POJAZD</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Flota dostępna od ręki</Text>
      <View style={styles.fleetCard}>
        <Image source={toyotaCorollaImage} style={styles.carImage} resizeMode="cover" />
        <View style={styles.fleetCardBottom}>
          <Text style={styles.carName}>{fleetVehicle.name}</Text>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('CarDetails', { vehicleId: 'corolla' })}
          >
            <Text style={styles.secondaryButtonText}>Szczegóły</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: colors.avatarBg,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
  },
  activeCard: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryBorder,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  carNameActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  carDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  fleetCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  carImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: colors.avatarBg,
  },
  fleetCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
