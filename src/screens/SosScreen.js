import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import {
  ShieldCheck,
  UserCog,
  Info,
  PhoneCall,
  MessageSquare,
  X,
  AlertTriangle,
} from 'lucide-react-native';
import ScreenTopHeader from '../components/ScreenTopHeader';
import { colors } from '../constants/colors';
import { fleetManager } from '../constants/mockData';

export default function SosScreen({ navigation }) {
  const [isManagerVisible, setManagerVisible] = useState(false);
  const goToProfile = () => navigation.navigate('Kokpit', { screen: 'Profil' });

  return (
    <View style={styles.container}>
      <ScreenTopHeader
        title="Pomoc Drogowa"
        onProfilePress={goToProfile}
        backgroundColor={colors.backgroundAlt}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.alertBox}>
          <View style={styles.alertIconCircle}>
            <AlertTriangle color={colors.danger} size={24} />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTitle}>Wypadek lub awaria?</Text>
            <Text style={styles.alertSubtitle}>Jesteśmy do Twojej dyspozycji 24/7</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Wybierz rodzaj pomocy</Text>

        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconCircle, { backgroundColor: colors.successLight }]}>
            <ShieldCheck color={colors.success} size={24} />
          </View>
          <Text style={styles.cardText}>Wezwij Assistance (24/7)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setManagerVisible(true)}>
          <View style={[styles.iconCircle, { backgroundColor: colors.warningLight }]}>
            <UserCog color={colors.warning} size={24} />
          </View>
          <Text style={styles.cardText}>Kontakt z Menedżerem Floty</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CollisionGuide')}
        >
          <View style={[styles.iconCircle, { backgroundColor: colors.primaryLight }]}>
            <Info color={colors.primary} size={24} />
          </View>
          <Text style={styles.cardText}>Co robić w razie kolizji?</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal animationType="slide" transparent visible={isManagerVisible}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setManagerVisible(false)}
        >
          <View style={styles.bottomSheet}>
            <View style={styles.dragHandle} />
            <TouchableOpacity style={styles.closeX} onPress={() => setManagerVisible(false)}>
              <X color={colors.textSecondary} size={24} />
            </TouchableOpacity>

            <View style={styles.managerInfo}>
              <View style={styles.managerAvatar}>
                <Text style={styles.avatarText}>{fleetManager.initials}</Text>
              </View>
              <Text style={styles.managerName}>{fleetManager.name}</Text>
              <Text style={styles.managerRole}>{fleetManager.role}</Text>
            </View>

            <TouchableOpacity style={styles.callBtn}>
              <PhoneCall color={colors.white} size={20} />
              <Text style={styles.callBtnText}>ZADZWOŃ: {fleetManager.phone}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smsBtn}>
              <MessageSquare color={colors.primary} size={20} />
              <Text style={styles.smsBtnText}>WYŚLIJ WIADOMOŚĆ SMS</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  content: {
    padding: 16,
  },
  alertBox: {
    backgroundColor: colors.dangerLight,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: colors.dangerBorder,
  },
  alertIconCircle: {
    width: 48,
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dangerText,
  },
  alertSubtitle: {
    fontSize: 14,
    color: colors.dangerText,
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.textDark,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textDark,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingBottom: 40,
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: colors.border,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  closeX: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  managerInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  managerAvatar: {
    width: 70,
    height: 70,
    backgroundColor: colors.avatarBg,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.textSecondary,
  },
  managerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  managerRole: {
    color: colors.textSecondary,
  },
  callBtn: {
    backgroundColor: colors.success,
    flexDirection: 'row',
    padding: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  callBtnText: {
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  smsBtn: {
    backgroundColor: colors.primaryLight,
    flexDirection: 'row',
    padding: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smsBtnText: {
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});
