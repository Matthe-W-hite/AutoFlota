import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Car, Calendar, AlertTriangle, LifeBuoy } from 'lucide-react-native';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CalendarScreen from '../screens/CalendarScreen';
import WarningsScreen from '../screens/WarningsScreen';
import SosScreen from '../screens/SosScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripHistoryScreen from '../screens/TripHistoryScreen';
import PickupChecklistScreen from '../screens/PickupChecklistScreen';
import CarDetailsScreen from '../screens/CarDetailsScreen';
import SuccessScreen from '../screens/SuccessScreen';
import CollisionGuideScreen from '../screens/CollisionGuideScreen';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function KokpitStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="Profil" component={ProfileScreen} />
      <Stack.Screen name="TripHistory" component={TripHistoryScreen} />
      <Stack.Screen name="PickupChecklist" component={PickupChecklistScreen} />
      <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="CollisionGuide" component={CollisionGuideScreen} />
    </Stack.Navigator>
  );
}

function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalendarMain" component={CalendarScreen} />
      <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
    </Stack.Navigator>
  );
}

function SosStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SosMain" component={SosScreen} />
      <Stack.Screen name="CollisionGuide" component={CollisionGuideScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarIcon: ({ color }) => {
          const iconSize = 28;
          if (route.name === 'Kokpit') return <Car color={color} size={iconSize} />;
          if (route.name === 'Kalendarz') return <Calendar color={color} size={iconSize} />;
          if (route.name === 'Usterki') return <AlertTriangle color={color} size={iconSize} />;
          if (route.name === 'SOS') return <LifeBuoy color={color} size={iconSize} />;
        },
      })}
    >
      <Tab.Screen name="Kokpit" component={KokpitStack} />
      <Tab.Screen name="Kalendarz" component={CalendarStack} />
      <Tab.Screen name="Usterki" component={WarningsScreen} />
      <Tab.Screen name="SOS" component={SosStack} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainApp" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
