import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import DashboardScreen from '../src/screens/DashboardScreen';
import { currentUser, activeReservation, fleetVehicle } from '../src/constants/mockData';

const navigationMock = {
  navigate: jest.fn(),
};

describe('DashboardScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders greeting and active reservation information', () => {
    render(<DashboardScreen navigation={navigationMock} />);

    expect(screen.getByText(`Cześć, ${currentUser.firstName}!`)).toBeTruthy();
    expect(screen.getByText(`${activeReservation.name} (${activeReservation.plate})`)).toBeTruthy();
    expect(screen.getByText(`Godzina: ${activeReservation.time}`)).toBeTruthy();
  });

  it('navigates to PickupChecklist when primary button is pressed', () => {
    render(<DashboardScreen navigation={navigationMock} />);

    fireEvent.press(screen.getByText('ODBIERZ POJAZD'));

    expect(navigationMock.navigate).toHaveBeenCalledWith('PickupChecklist');
  });

  it('navigates to CarDetails with vehicleId parameter', () => {
    render(<DashboardScreen navigation={navigationMock} />);

    fireEvent.press(screen.getByText('Szczegóły'));

    expect(navigationMock.navigate).toHaveBeenCalledWith('CarDetails', { vehicleId: 'corolla' });
  });
});
