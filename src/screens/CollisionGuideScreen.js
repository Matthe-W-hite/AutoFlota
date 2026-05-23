import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AlertTriangle, HeartPulse, FileText, Camera } from 'lucide-react-native';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';
import { collisionGuideSteps } from '../constants/mockData';

const STEP_ICONS = {
  alert: AlertTriangle,
  heart: HeartPulse,
  file: FileText,
  camera: Camera,
};

export default function CollisionGuideScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Poradnik kolizyjny" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.content}>
        {collisionGuideSteps.map((step) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <View key={step.id} style={styles.stepContainer}>
              <View style={styles.iconBox}>
                <Icon color={colors.primary} size={24} />
              </View>
              <View style={styles.textBox}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDesc}>{step.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.emergencyBtn}>
          <AlertTriangle color={colors.white} size={24} />
          <Text style={styles.emergencyBtnText}>WEZWIJ POMOC (112)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  iconBox: {
    width: 50,
    alignItems: 'center',
    paddingTop: 2,
  },
  textBox: {
    flex: 1,
    paddingLeft: 10,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 6,
  },
  stepDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  bottomBar: {
    padding: 20,
    paddingBottom: 40,
  },
  emergencyBtn: {
    backgroundColor: colors.danger,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyBtnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
});
