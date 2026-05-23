import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Check } from 'lucide-react-native';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';
import { tripHistory } from '../constants/mockData';

function TripHistoryCard({ date, vehicle, status }) {
  return (
    <View style={styles.tripCard}>
      <Text style={styles.tripDate}>{date}</Text>
      <Text style={styles.tripVehicle} numberOfLines={1}>
        {vehicle}
      </Text>
      <View style={styles.statusBadge}>
        <Check color={colors.success} size={14} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
}

export default function TripHistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Historia wyjazdów" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Historia wyjazdów</Text>

        {tripHistory.map((trip) => (
          <TripHistoryCard
            key={trip.id}
            date={trip.date}
            vehicle={trip.vehicle}
            status={trip.status}
          />
        ))}
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
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
  },
  tripCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 72,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tripDate: {
    width: 56,
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  tripVehicle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successLight,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.success,
  },
});
