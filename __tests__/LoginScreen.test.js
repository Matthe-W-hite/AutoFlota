import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { currentUser } from '../src/constants/mockData';

const navigationMock = {
  replace: jest.fn(),
};

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form fields and button', () => {
    render(<LoginScreen navigation={navigationMock} />);

    expect(screen.getByText('AutoFlota')).toBeTruthy();
    expect(screen.getByPlaceholderText(currentUser.email)).toBeTruthy();
    expect(screen.getByPlaceholderText('••••••••')).toBeTruthy();
    expect(screen.getByText('ZALOGUJ SIĘ')).toBeTruthy();
  });

  it('shows validation errors when fields are empty', () => {
    render(<LoginScreen navigation={navigationMock} />);

    fireEvent.press(screen.getByText('ZALOGUJ SIĘ'));

    expect(screen.getAllByText('Dane są nieprawidłowe.')).toHaveLength(2);
    expect(navigationMock.replace).not.toHaveBeenCalled();
  });

  it('clears the e-mail validation message when user types again', () => {
    render(<LoginScreen navigation={navigationMock} />);

    fireEvent.press(screen.getByText('ZALOGUJ SIĘ'));
    expect(screen.getAllByText('Dane są nieprawidłowe.')).toHaveLength(2);

    fireEvent.changeText(screen.getByPlaceholderText(currentUser.email), 'test@flota.pl');

    expect(screen.getAllByText('Dane są nieprawidłowe.')).toHaveLength(1);
  });

  it('toggles password visibility', () => {
    render(<LoginScreen navigation={navigationMock} />);

    const toggleButton = screen.getByLabelText('Pokaż hasło');
    fireEvent.press(toggleButton);

    expect(screen.getByLabelText('Ukryj hasło')).toBeTruthy();
  });

  it('navigates to MainApp when credentials are entered', () => {
    render(<LoginScreen navigation={navigationMock} />);

    fireEvent.changeText(screen.getByPlaceholderText(currentUser.email), currentUser.email);
    fireEvent.changeText(screen.getByPlaceholderText('••••••••'), 'secret');
    fireEvent.press(screen.getByText('ZALOGUJ SIĘ'));

    expect(navigationMock.replace).toHaveBeenCalledWith('MainApp');
  });
});
