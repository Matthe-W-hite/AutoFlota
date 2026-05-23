import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { User, Clock, LogOut } from 'lucide-react-native';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';
import { currentUser } from '../constants/mockData';

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Mój profil" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.userCard}>
          <View style={styles.largeAvatar}>
            <User color={colors.textSecondary} size={40} />
          </View>
          <Text style={styles.userName}>{currentUser.fullName}</Text>
          <Text style={styles.userEmail}>{currentUser.email}</Text>
        </View>

        <Text style={styles.sectionTitle}>Ustawienia konta</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('TripHistory')}
        >
          <View style={styles.menuItemLeft}>
            <Clock color={colors.textSecondary} size={24} />
            <Text style={styles.menuItemText}>Historia wyjazdów</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <User color={colors.textSecondary} size={24} />
            <Text style={styles.menuItemText}>Edytuj dane</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.menuItemLast]} onPress={handleLogout}>
          <View style={styles.menuItemLeft}>
            <LogOut color={colors.danger} size={24} />
            <Text style={[styles.menuItemText, styles.menuItemDanger]}>Wyloguj się</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  userCard: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  largeAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.avatarBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 12,
    paddingLeft: 8,
  },
  menuItem: {
    backgroundColor: colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  menuItemLast: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 16,
    fontWeight: '500',
  },
  menuItemDanger: {
    color: colors.danger,
  },
});
