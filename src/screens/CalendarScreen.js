import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, ChevronRight, ChevronDown, User } from 'lucide-react-native';
import { colors } from '../constants/colors';
import { calendarCars, vehiclesById } from '../constants/mockData';
import BrandLogo from '../components/BrandLogo';

const WEEK_DAYS = ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
const MONTH_NAME = 'Maja';
const YEAR = 2026;

const CALENDAR_DAYS = [
  { day: 27, isCurrentMonth: false },
  { day: 28, isCurrentMonth: false },
  { day: 29, isCurrentMonth: false },
  { day: 30, isCurrentMonth: false },
  ...Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    isCurrentMonth: true,
  })),
];

function CalendarDay({ day, isCurrentMonth, isSelected, onPress }) {
  const content = (
    <Text
      style={[
        styles.dayText,
        !isCurrentMonth && styles.outOfMonthText,
        isSelected && styles.selectedDayText,
      ]}
    >
      {day}
    </Text>
  );

  if (!isCurrentMonth) {
    return <View style={styles.dayCell}>{content}</View>;
  }

  return (
    <TouchableOpacity
      style={[styles.dayCell, isSelected && styles.selectedDayCell]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {content}
    </TouchableOpacity>
  );
}

export default function CalendarScreen({ navigation }) {
  const [selectedDay, setSelectedDay] = useState(23);
  const reservationDate = `${selectedDay} ${MONTH_NAME} ${YEAR}`;

  const handleSelectCar = (vehicleId) => {
    navigation.navigate('CarDetails', {
      vehicleId,
      reservationDate,
      source: 'calendar',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rezerwacja</Text>
        <View style={styles.avatar}>
          <User color={colors.textSecondary} size={20} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity>
              <ChevronLeft color={colors.black} size={24} />
            </TouchableOpacity>

            <View style={styles.dateSelectors}>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Maj</Text>
                <ChevronDown color={colors.textSecondary} size={16} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>{YEAR}</Text>
                <ChevronDown color={colors.textSecondary} size={16} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <ChevronRight color={colors.black} size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.weekDays}>
            {WEEK_DAYS.map((day) => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {CALENDAR_DAYS.map((item) => (
              <CalendarDay
                key={`${item.day}-${item.isCurrentMonth}`}
                day={item.day}
                isCurrentMonth={item.isCurrentMonth}
                isSelected={item.isCurrentMonth && item.day === selectedDay}
                onPress={() => setSelectedDay(item.day)}
              />
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Dostępne auta: {selectedDay} {MONTH_NAME}
        </Text>

        {calendarCars.map((car) => {
          const vehicle = vehiclesById[car.vehicleId];
          return (
            <View key={car.id} style={styles.carCard}>
              <View style={styles.carCardLeft}>
                <BrandLogo brand={vehicle.brand} size={48} />
                <Text style={styles.carName}>{vehicle.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => handleSelectCar(car.vehicleId)}
              >
                <Text style={styles.selectButtonText}>Wybierz</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAlt,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.avatarBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  calendarCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 32,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  dateSelectors: {
    flexDirection: 'row',
    gap: 12,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textDark,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  weekDayText: {
    fontSize: 13,
    color: colors.textMuted,
    width: 32,
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  dayCell: {
    width: '14.28%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
  },
  selectedDayCell: {
    backgroundColor: colors.selectedDay,
    borderRadius: 8,
  },
  dayText: {
    fontSize: 15,
    color: colors.textDark,
  },
  outOfMonthText: {
    color: colors.outOfMonth,
  },
  selectedDayText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
    marginLeft: 4,
  },
  carCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  carCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    marginRight: 8,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
    flexShrink: 1,
  },
  selectButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  selectButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
