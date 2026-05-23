import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { ChevronLeft, Fuel, Settings2, Users, Briefcase, CheckCircle } from 'lucide-react-native';
import { colors } from '../constants/colors';
import { vehiclesById } from '../constants/mockData';
import { vehicleImages } from '../constants/images';

export default function CarDetailsScreen({ navigation, route }) {
  const { vehicleId, reservationDate, source } = route.params ?? {};
  const vehicle = vehiclesById[vehicleId] ?? vehiclesById.corolla;
  const carImage = vehicleImages[vehicle.imageKey] ?? vehicleImages.corolla;
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const specs = [
    { icon: Fuel, label: 'Paliwo', value: vehicle.fuel },
    { icon: Settings2, label: 'Skrzynia', value: vehicle.transmission },
    { icon: Users, label: 'Miejsca', value: vehicle.seats },
    { icon: Briefcase, label: 'Bagażnik', value: vehicle.trunk },
  ];

  const handleReserve = () => {
    setIsSuccessModalVisible(true);
  };

  const handleBackAfterReserve = () => {
    setIsSuccessModalVisible(false);
    if (source === 'calendar') {
      navigation.navigate('CalendarMain');
    } else {
      navigation.navigate('DashboardMain');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeft color={colors.black} size={28} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={carImage} style={styles.carImage} resizeMode="cover" />

        <View style={styles.titleSection}>
          <Text style={styles.carName}>{vehicle.fullName}</Text>
          <Text style={styles.plateNumber}>{vehicle.plate}</Text>
          {reservationDate ? (
            <Text style={styles.reservationDate}>Termin rezerwacji: {reservationDate}</Text>
          ) : null}
        </View>

        <Text style={styles.sectionTitle}>Specyfikacja</Text>
        <View style={styles.specsGrid}>
          {specs.map((spec) => (
            <View key={spec.label} style={styles.specCard}>
              <spec.icon color={colors.textSecondary} size={24} />
              <Text style={styles.specLabel}>{spec.label}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Opis pojazdu</Text>
        <Text style={styles.description}>{vehicle.description}</Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleReserve}>
          <Text style={styles.primaryButtonText}>ZAREZERWUJ POJAZD</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent visible={isSuccessModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <CheckCircle color={colors.success} size={64} />
            <Text style={styles.modalTitle}>Rezerwacja potwierdzona!</Text>
            <Text style={styles.modalDescription}>
              Pojazd {vehicle.fullName} został zarezerwowany
              {reservationDate ? ` na ${reservationDate}` : ''}. Szczegóły wyjazdu znajdziesz w kokpicie.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleBackAfterReserve}>
              <Text style={styles.modalButtonText}>
                {source === 'calendar' ? 'Wróć do kalendarza' : 'Wróć do kokpitu'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 16,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    paddingBottom: 40,
  },
  carImage: {
    width: '100%',
    height: 300,
    backgroundColor: colors.avatarBg,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titleSection: {
    padding: 24,
    alignItems: 'center',
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
    textAlign: 'center',
  },
  plateNumber: {
    fontSize: 16,
    color: colors.primary,
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  reservationDate: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  specCard: {
    width: '50%',
    padding: 8,
  },
  specValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 4,
  },
  specLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSlate,
    lineHeight: 22,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  bottomBar: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  modalCard: {
    width: 329,
    minHeight: 260,
    backgroundColor: colors.white,
    borderRadius: 24,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 28,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  modalButton: {
    width: 265,
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
