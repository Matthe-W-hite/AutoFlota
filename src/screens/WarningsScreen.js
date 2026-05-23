import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Camera, ChevronDown, CheckCircle } from 'lucide-react-native';
import ScreenTopHeader from '../components/ScreenTopHeader';
import { colors } from '../constants/colors';
import { companyVehicles } from '../constants/mockData';

export default function WarningsScreen({ navigation }) {
  const goToProfile = () => navigation.navigate('Kokpit', { screen: 'Profil' });
  const [description, setDescription] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState(companyVehicles[0].id);
  const [isVehicleListOpen, setIsVehicleListOpen] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const selectedVehicle =
    companyVehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? companyVehicles[0];

  const handleSelectVehicle = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    setIsVehicleListOpen(false);
  };

  const handleSubmit = () => {
    setIsVehicleListOpen(false);
    setIsSuccessModalVisible(true);
  };

  const handleBackToDashboard = () => {
    setIsSuccessModalVisible(false);
    navigation.navigate('Kokpit', { screen: 'DashboardMain' });
  };

  return (
    <View style={styles.container}>
      <ScreenTopHeader title="Zgłoś usterkę" onProfilePress={goToProfile} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Pojazd</Text>
        <TouchableOpacity
          style={[styles.dropdown, isVehicleListOpen && styles.dropdownOpen]}
          onPress={() => setIsVehicleListOpen((prev) => !prev)}
          activeOpacity={0.8}
        >
          <Text style={styles.dropdownText}>{selectedVehicle.label}</Text>
          <View style={isVehicleListOpen ? styles.chevronRotated : undefined}>
            <ChevronDown color={colors.textSecondary} size={20} />
          </View>
        </TouchableOpacity>

        {isVehicleListOpen && (
          <View style={styles.dropdownList}>
            {companyVehicles.map((vehicle) => {
              const isSelected = vehicle.id === selectedVehicleId;
              return (
                <TouchableOpacity
                  key={vehicle.id}
                  style={[styles.dropdownItem, isSelected && styles.dropdownItemSelected]}
                  onPress={() => handleSelectVehicle(vehicle.id)}
                >
                  <Text
                    style={[styles.dropdownItemText, isSelected && styles.dropdownItemTextSelected]}
                  >
                    {vehicle.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <Text style={styles.label}>Opis usterki</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Np. Prawa przednia żarówka mijania jest spalona..."
          placeholderTextColor={colors.textMuted}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
          textAlignVertical="top"
        />

        <Text style={styles.label}>Załącznik (Opcjonalnie)</Text>
        <TouchableOpacity style={styles.photoUpload}>
          <View style={styles.cameraIconWrapper}>
            <Camera color={colors.primary} size={28} />
          </View>
          <Text style={styles.photoUploadText}>Kliknij, aby dodać zdjęcie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>WYŚLIJ ZGŁOSZENIE</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal animationType="fade" transparent visible={isSuccessModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <CheckCircle color={colors.success} size={64} />
            <Text style={styles.modalTitle}>Zgłoszenie przyjęte!</Text>
            <Text style={styles.modalDescription}>
              Przekazaliśmy informację do działu technicznego. Skontaktujemy się z Tobą wkrótce.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleBackToDashboard}>
              <Text style={styles.modalButtonText}>Wróć do kokpitu</Text>
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
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textLabel,
    marginBottom: 8,
    marginTop: 16,
  },
  dropdown: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: colors.borderLight,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.black,
    flex: 1,
    marginRight: 8,
  },
  chevronRotated: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownList: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.border,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  dropdownItemSelected: {
    backgroundColor: colors.primaryLight,
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.textDark,
  },
  dropdownItemTextSelected: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.black,
    minHeight: 120,
  },
  photoUpload: {
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.dashedBorder,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  cameraIconWrapper: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 30,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  photoUploadText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
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
