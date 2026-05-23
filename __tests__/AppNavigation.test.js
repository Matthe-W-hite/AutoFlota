import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import AppNavigation from '../src/navigation/AppNavigation';
import { currentUser } from '../src/constants/mockData';

describe('AppNavigation integration', () => {
  const performLogin = async () => {
    fireEvent.changeText(screen.getByPlaceholderText(currentUser.email), currentUser.email);
    fireEvent.changeText(screen.getByPlaceholderText('••••••••'), 'secret');
    fireEvent.press(screen.getByText('ZALOGUJ SIĘ'));
    await waitFor(() => expect(screen.getByText('Twój wyjazd na dzisiaj')).toBeTruthy());
  };

  it('logs in and navigates to pickup checklist', async () => {
    render(<AppNavigation />);

    await performLogin();

    fireEvent.press(screen.getByText('ODBIERZ POJAZD'));

    await waitFor(() => expect(screen.getByText('Odbiór pojazdu')).toBeTruthy());
  });

  it('switches tabs after login', async () => {
    render(<AppNavigation />);

    await performLogin();

    fireEvent.press(screen.getByText('SOS'));
    await waitFor(() => expect(screen.getByText('Wypadek lub awaria?')).toBeTruthy());

    fireEvent.press(screen.getByText('Kalendarz'));
    await waitFor(() => expect(screen.getByText(/Dostępne auta:/)).toBeTruthy());
  });
});
